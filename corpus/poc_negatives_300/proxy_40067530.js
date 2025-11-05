class A {}

var x = Proxy;

class B extends A {
  constructor() {
    x = new.target;
    super();
  }
}
function construct() {
  return Reflect.construct(B, [], Proxy);  
}
for (let i = 0; i < 2000; i++) construct();

