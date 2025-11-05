function opt(opt_param){
    const v1 = eval(eval);
    const v2 = `
        const v5 = new Uint16Array(1455);
        function f6() {
            const v7 = [-1230688491,129,4096,634752356,-13,4,-16,129];
            try { v7.filter(f6); } catch (e) {}
            function f9(a10, a11, a12, a13) {
                function f14(a15) {
                    return a13;
                }
                class C16 extends f14 {
                    static {
                        super.h;
                        for (let i = 0; i < 5; i++) {
                            try {
                                class C19 {
                                }
                            } catch(e20) {
                            } finally {
                            }
                        }
                    }
                }
                return f9;
            }
            %OptimizeFunctionOnNextCall(f9);
            f9();
            return f6;
        }
        v5.sort(f6);
    `;
    v1(v2);
    }
    
    opt()