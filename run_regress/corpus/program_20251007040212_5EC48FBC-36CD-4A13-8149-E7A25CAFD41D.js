function foo(a1) {
    for (let i3 = 1; i3 < 2; i3++) {
        for (let i10 = 1; i10 < 2; i10++) {
            for (let i17 = 1; i17 < 2; i17++) {
                for (let i24 = 1; i24 < 2; i24++) {
                    for (let i31 = 1; i31 < 2; i31++) {
                        for (let i38 = 1; i38 < 2; i38++) {
                            for (let i45 = 1; i45 < 2; i45++) {
                                var z = a1.foo;
                                z.foo = ((((i31 * i38) * i45) * i17) * i10) * i3;
                            }
                        }
                    }
                }
            }
        }
    }
}
const v59 = { foo: 1 };
foo({ foo: v59 });
