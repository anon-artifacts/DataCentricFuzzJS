// Flags: --no-lazy-feedback-allocation
class A {
  constructor(arg) {
    return arg;
  }
}

class B extends A {
  #field = 1;
  constructor(arg) {
    super(arg);
  }
}

Realm.createAllowCrossRealmAccess();
const g = Realm.global(1);
Realm.detachGlobal(1);
new B(g); 