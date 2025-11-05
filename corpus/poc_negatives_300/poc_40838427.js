function f() {  
  const a = {};  
  a.x = 42;  
  a.__defineSetter__("y",() => {});  
  Object.preventExtensions(a);  
  a.__defineGetter__("y",() => {});  
  a[2] = 1;  
  a.x = 0.1;  
  return {...a}  
}  
  
%PrepareFunctionForOptimization(f);  
f();  
f();  
f();  