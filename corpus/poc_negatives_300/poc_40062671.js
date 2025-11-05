function main() {
        function v1(v2,v3,v4,v5) {
                if (v5) {
                        with (2.0) {
                                            const v7 = v5();

                        }

                }

        }
        for (let v8 = 0; v8 < 4002; v8++) {
                    const v9 = v1(v8,Float64Array,Float64Array,v1);

        }


}
main();
//un d8 with "--expose-gc --future --harmony --assert-types --maglev-assert --turboshaft-assert-types --harmony-rab-gsab --harmony-struct --allow-natives-syntax --interrupt-budget=1000 --fuzzing --maglev --maglev-inlining  --turbo-compress-translation-arrays  --turboshaft  --verify-heap --flush-baseline-code"