function func3(obj, name, type) {
  try {
    desc = Object.getOwnPropertyDescriptor(obj, name);
  } catch (e) {
    return false;
  }
  return typeof type === 'undefined' || typeof desc.value === type;
}
function func2(obj, type) {
  let properties = [];
  for (let name of Object.getOwnPropertyNames(obj)) {
    if (func3(obj, name, type)) properties.push(name);
  }
  return properties;
}
function* func1(root = this, level = 0) {
  if (level > 4) return;
  let obj_names = func2(root, 'object');
  for (let obj_name of obj_names) {
    let obj = root[obj_name];
    yield* func1(obj, level + 1);
  }
}
function func0() {
  for (let obj of func1()) { }
}
function func5(f) {
  function t() {
    try {
      return t();
    } catch (e) {
      return f();
    }
  }
  try {
    return t();
  } catch (e) { }
}
function main() {
  {
    function f1() { }
    let v2 = new Proxy(f1, {});
    (Reflect.construct(Intl.NumberFormat, [], v2) instanceof f1);
    (Reflect.construct(Intl.NumberFormat, [], v2).__proto__);
    (Reflect.construct(Intl.DateTimeFormat, [], v2).__proto__);
    try {
      func5(() => { });
    } catch (e) { }
  }
  {
    function f2() { }
    let v3 = new Proxy(f2, {});
    (Reflect.construct(Intl.Collator, [], v3).__proto__);
    func0();
    func0();
    func0();
    func0();
    (Reflect.construct(Intl.NumberFormat, [], v3) instanceof Intl.NumberFormat);
  }
}
main();
main();
% OptimizeFunctionOnNextCall(main);
main();
//flags: --allow-natives-syntax --jit-fuzzing --optimize-for-size --stress-concurrent-allocation