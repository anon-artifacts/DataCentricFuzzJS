class C extends Array {
  constructor() {
      (() => (() => super())())();
  }
}
new C();
new C();
%OptimizeMaglevOnNextCall(C);
new C();
C.__proto__ = [1];
new C();