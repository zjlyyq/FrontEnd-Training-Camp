// 写法会污染闭包，多次调用出问题
const curry = function (fn) {
  var tmpargs = [],
    arity = fn.length,
    targetFn = fn;
  const wrapper = function () {
    var length = arguments.length,
      args = Array(length),
      index = length;
    while (index--) {
      args[index] = arguments[index];
    }
    if (length >= arity) {
      return targetFn.call(this, ...[...tmpargs, ...args]);
    } else {
      arity -= length;
      tmpargs = [].concat(tmpargs, args)
      return wrapper
    }
  }
  return wrapper;
}

function add(a, b, c) {
  return a + b + c;
}
const curriedAdd = curry(add);
console.log(curriedAdd);
console.log(curriedAdd(1, 2, 3));
console.log(curriedAdd(1, 2)(3));
console.log(curriedAdd(1)(2)(3));