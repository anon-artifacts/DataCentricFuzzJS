function f() {
    eval();
    let x;
    try {
      class C extends (y.x = 1) {}
    } catch {}
    try {
      if (!x) throw new "x";
    } catch  {}
}

for (let i = 0; i < 1000; i++) {
  f();
}