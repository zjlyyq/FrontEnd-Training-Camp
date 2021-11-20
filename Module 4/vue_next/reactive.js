const reactive = function(obj) {
  return new Proxy(obj, {
    get(obj, attr) {
      console.log(`getter ${attr}`);
      return obj[attr];
    },
    set(obj, attr, val) {
      console.log(`setter ${attr}`);
      obj[attr] = val;
    }
  })
}

const obj = {
  name: 'zhang san',
  age: 24
}

const observed = reactive(obj);
console.log(observed);
observed.name = 'Li Si';
console.log(obj);
let { name } = observed;
console.log(`name = ${name}`);
name = 'ddd';