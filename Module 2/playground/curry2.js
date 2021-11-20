// this 绑定还有点问题
const curry = function (fn) {
  var arity = fn.length;
  const recurry = function recurry(args, wrapper) {
    return function() {
      return wrapper.call(this, ...[...args, ...arguments])
    }
  }
  const wrapper = function () {
    var length = arguments.length,
      args = Array(length),
      index = length;
    while (index--) {
      args[index] = arguments[index];
    }
    if (length >= arity) {
      return fn.call(this, ...args);
    } else {
      return recurry(args, wrapper);
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
console.log(curriedAdd(1)(2)(3)(4));