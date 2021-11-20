const { reactive, isReactive, effect, ref, toRef, toRefs, readonly, shallowReactive, watch } = require("vue");

describe("reactive返回对象", () => {
  test("Object类型", () => {
    const original = { foo: 1 };
    const observed = reactive(original);
    expect(observed).not.toBe(original);
    let a = 1;
    effect(() => a = observed.foo );
    observed.foo = 2;
    expect(a).toBe(2);
    expect(isReactive(observed)).toBe(true);
    expect(isReactive(original)).toBe(false);
  });

  test("Array类型", () => {
    const original = [{ foo: 1 }];
    const observed = reactive(original);
    expect(observed).not.toBe(original);
    expect(isReactive(observed)).toBe(true);
    expect(isReactive(original)).toBe(false);
    expect(isReactive(observed[0])).toBe(true);
  });

  test("Array嵌套数组", () => {
    const original = [{ foo: 1, a: { b: { c: 1 } }, arr: [{ d: {} }] }];
    const observed = reactive(original);
    expect(observed).not.toBe(original);
    expect(isReactive(observed)).toBe(true);
    expect(isReactive(original)).toBe(false);
    expect(isReactive(observed[0])).toBe(true);
    expect(isReactive(observed[0].a.b)).toBe(true);
    expect(isReactive(observed[0].arr[0].d)).toBe(true);
  });

  test("修改原对象", () => {
    let original = { foo: 1 };
    const observed = reactive(original);
    // set
    original.bar = 1;
    expect(observed.bar).toBe(1);
    expect(original.bar).toBe(1);
    // delete
    delete original.foo;
    expect("foo" in observed).toBe(false);
    expect("foo" in original).toBe(false);
  });

  test("重复reactive", () => {
    const original = { foo: 1 };
    const observed = reactive(original);
    const observed2 = reactive(observed);
    expect(observed2).toBe(observed);
  });

  test("原始数据toRaw", () => {
    const original = { foo: 1 };
    const observed = reactive(original);
    expect(toRaw(observed)).toBe(original);
    expect(toRaw(original)).toBe(original);
  });

  test("原始数据类型", () => {
    const original = new Date();
    const observed = reactive(original);
    expect(observed).toBe(original);
    expect(isReactive(observed)).toBe(false);
  });

  test("Ref Test", () => {
    let age = 12;
    let ageRef = ref('age');
    let data = '';
    effect(() => data = ageRef.value);
    ageRef.value = '24';
    expect(data).toBe('24');
  });
  test("toRef 用于为源响应式对象上的属性新建一个ref，从而保持对其源对象属性的响应式连接。", () => {
    let original = { title: 'Blog', author: 'zjl'};
    let observed = reactive(original);
    let authRef = toRef(observed, 'author');
    let data = '';
    effect(() => data = authRef.value);
    authRef.value = 'yyq';
    expect(data).toBe('yyq');
  });
  test("因为在对一个响应式对象直接解构时解构后的数据将不再有响应式，而使用toRefs可以方便解决这一问题", () => {
    let original = { title: 'Blog', author: 'zjl'};
    let observed = reactive(original);
    let { title, author } = toRefs(observed);
    let mytitle, myauthor;
    effect(() => {mytitle = title.value; myauthor = author.value;});
    title.value = 'new blog';
    author.value = 'yyq';
    expect(mytitle).toBe('new blog');
    expect(myauthor).toBe('yyq');
  });
  test("ReadOnly 获取源对象（响应式或纯对象获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。", () => {
    let original = { count: 1};
    let reactived = reactive(original);
    let origin_readonly = readonly(original);
    expect(origin_readonly.count).toBe(1);
    original.count ++;
    expect(origin_readonly.count).toBe(2);
  });

  test("shallowReactive创建一个响应式代理，该代理跟踪其自身 property 的响应性，但不执行嵌套对象的深度响应式转换 (暴露原始值)", () => {
    let original = { count: 1, nested: { bar: 2 }};
    let shadow = shallowReactive(original);
    let count = shadow.count;
    effect(() => {count = shadow.count;});
    shadow.count ++;
    expect(count).toBe(2);
    expect(isReactive(shadow.nested)).toBe(false);
  });

  test("watch 侦听特定的 data 源，并在单独的回调函数中副作用。默认情况下，它也是惰性的", () => {
    let original = { count: 1, nested: { bar: 2 }};
    let shadow = shallowReactive(original);
    // 直接侦听一个响应式对象
    // watch(shadow, (shadow, preShadow) => {
    //   console.log(shadow, preShadow);
    // })

    let count = toRef(original, 'count');
    // 直接侦听一个ref
    watch(count, (count, preCount) => {
      console.log(count.value, preCount.value);
    })
    count.value ++;
    expect(original.count).toBe(2);
  });
});
