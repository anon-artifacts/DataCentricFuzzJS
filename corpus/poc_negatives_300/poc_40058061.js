function placeholder() {
    return {};
}

function PrepareFunctionForOptimization(a) {
    % PrepareFunctionForOptimization(a);
}

function OptimizeFunctionOnNextCall(a) {
    % OptimizeFunctionOnNextCall(a);
}

function NeverOptimizeFunction(a) {
    % NeverOptimizeFunction(a);
}

function DeoptimizeFunction(a) {
    % DeoptimizeFunction(a);
}

function DeoptimizeNow() {
    % DeoptimizeNow();
}

function OptimizeOsr() {
    % OptimizeOsr();
}

function main() {
    const v0 = -Infinity;

    function v3(v4, v5) {
        const v7 = 2;
        const v8 = 5.0;

        function v10(v11, v12) {
            const v14 = /8/gmy;

            function v16(v17, v18) {
                function v20(v21, v22) {
                    const v24 = [v14, `number${OptimizeOsr}Gh2uFzhrcQ${v18}bigint`];
                    const v25 = 100;
                    const v26 = 1;
                    const v27 = `number${OptimizeOsr}Gh2uFzhrcQ${v18}bigint`.replace;
                    const v28 = Reflect.apply(v27, v24, v24);
                }
                const v30 = new Promise(v20);
            }
            const v31 = v16(WeakMap, v16);
        }
        const v33 = new Promise(v10);
        const v36 = new Int32Array(35335);
        for (const v37 of v36) {
            switch (v37) {
                default:
                    break;
                case -2853099821:
                case 2:
                    break;
                case v37:
                    break;
                case -4.0:
                    const v40 = new Uint32Array(18505);
                    const v42 = new Float32Array(v40);
            }
        }
    }
    const v44 = new Promise(v3);
    let v45 = 0;
    do {
        % VerifyType(v3);
        const v47 = v45++;
    } while (v45 < 7);
    const v48 = [v0, v0];
    const v49 = -256n;
    const v51 = this;
    const v52 = /\Sw04hk.0Jj/umis;
    const v53 = [-256];
    const v55 = [-2853099821, -2853099821, -2853099821, -2853099821];
    const v56 = {};
    const v57 = [v56, v56];
    const v58 = `with(v56){for(let v62=0;v62<8;v62=v62+0){const v65=(v66,v67)=>{const v69=[6140,6140,6140];const v72=class V72 extends Array{constructor(v74){super(v74);this[v74]=v69;}setFloat64(v76,v77,v78){}trunc(v80){}};for(let v83=-128;v83<0;v83++){const v84=new v72(0);const v85=Uint16Array;}};const v86=v65(Uint8Array,255);}}`;
    const v88 = eval(v58);
    const v89 = v3(v3);
    const v90 = [-256, -256, -256, -256];
    const v91 = {};
    const v92 = [v91, v91];
    const v93 = {};
    const v94 = [v93, v93, v93, v93, v93];
    const v102 = [Int32Array, -1000000000.0, 1773112363, 1773112363];
    const v103 = [2391354030, v102, 1773112363, 1773112363, 1773112363];
    const v104 = new Date(96796388);
    const v105 = v104.setUTCMonth(613446.0757453695);
    gc();
} % NeverOptimizeFunction(main);
main();