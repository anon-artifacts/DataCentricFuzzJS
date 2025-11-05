function __isPropertyOfType(obj, name, type) {
    desc = Object.getOwnPropertyDescriptor(obj, name);
  return typeof type === 'undefined' || typeof desc.value === type;
}
function __getProperties(obj, type) {
  let properties = [];
  for (let name of Object.getOwnPropertyNames(obj)) {
    if (__isPropertyOfType(obj, name, type)) properties.push(name);
  }
  let proto = Object.getPrototypeOf(obj);
    Object.getOwnPropertyNames(proto).forEach(name => {
      if (name !== 'constructor') {
 properties.push(name);
      }
    });
  return properties;
}
function __getRandomProperty(obj, seed) {
  let properties = __getProperties(obj);
  return properties[seed % properties.length];
}
function __callRandomFunction(obj, seed, ...args) {
  let functions = __getProperties(obj, 'function');
  let random_function = functions[seed % functions.length];
    obj[random_function](...args);
}
const __v_0 = new d8.test.FastCAPI();
  (function () {
        Object.defineProperty(__v_0, __getRandomProperty(__v_0, 262756), {
          get: function () {
              __callRandomFunction(__v_0, 834796, undefined, -Infinity, 5e-324, __v_0, 0, 5e-324, 9007199254740990);
          }
        });
  })();
    function __f_7() {
      return __v_0.add_all_invalid_overload();
    }
    try {
      __v_16 = __f_7();
    } catch (e) {}
      %OptimizeFunctionOnNextCall(__f_7);
      __v_16 = __f_7();