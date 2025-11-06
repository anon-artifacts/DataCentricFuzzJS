try {
    function f0() {
    }
    for (const v2 of anyTypedArrayConstructors) {
        v2?.prototype?.reverse?.length;
        let v7;
        try { v7 = new v2(); } catch (e) {}
        try { v7.reverse(); } catch (e) {}
        try { new v2(); } catch (e) {}
        let v11;
        try { v11 = new v2(10); } catch (e) {}
        try { v11.reverse(); } catch (e) {}
        try { new v2(10); } catch (e) {}
        const v15 = [];
        let v16;
        try { v16 = new v2(v15); } catch (e) {}
        try { v16.reverse(); } catch (e) {}
        const v18 = [];
        try { new v2(v18); } catch (e) {}
        const v21 = [1];
        let v22;
        try { v22 = new v2(v21); } catch (e) {}
        try { v22.reverse(); } catch (e) {}
        const v25 = [1];
        try { new v2(v25); } catch (e) {}
        const v29 = [1,2];
        let v30;
        try { v30 = new v2(v29); } catch (e) {}
        try { v30.reverse(); } catch (e) {}
        const v34 = [2,1];
        try { new v2(v34); } catch (e) {}
        const v39 = [1,2,3];
        let v40;
        try { v40 = new v2(v39); } catch (e) {}
        try { v40.reverse(); } catch (e) {}
        const v45 = [3,2,1];
        try { new v2(v45); } catch (e) {}
        const v51 = [1,2,3,4];
        let v52;
        try { v52 = new v2(v51); } catch (e) {}
        try { v52.reverse(); } catch (e) {}
        const v58 = [4,3,2,1];
        try { new v2(v58); } catch (e) {}
        const v65 = [1,2,3,4,5];
        let v66;
        try { v66 = new v2(v65); } catch (e) {}
        try { v66.reverse(); } catch (e) {}
        const v73 = [5,4,3,2,1];
        try { new v2(v73); } catch (e) {}
        const v78 = [0.1,0.2,0.3];
        let v79;
        try { v79 = new v2(v78); } catch (e) {}
        try { v79.reverse(); } catch (e) {}
        const v84 = [0.3,0.2,0.1];
        try { new v2(v84); } catch (e) {}
        if (typeof newGlobal === "function") {
            let v90;
            try { v90 = newGlobal(); } catch (e) {}
            var reverse = v90?.[v2?.name]?.prototype?.reverse;
            const v99 = [3,2,1];
            let v100;
            try { v100 = new v2(v99); } catch (e) {}
            try { reverse.call(v100); } catch (e) {}
            const v105 = [1,2,3];
            try { new v2(v105); } catch (e) {}
        }
        let v113;
        try { v113 = Symbol(); } catch (e) {}
        const v114 = [];
        const v115 = {};
        const v116 = /./;
        let v118;
        try { v118 = new v2(); } catch (e) {}
        const v119 = {};
        let v120;
        try { v120 = new Proxy(v118, v119); } catch (e) {}
        var invalidReceivers = [,null,1,false,"",v113,v114,v115,v116,v120];
        const v123 = (a124) => {
            const v125 = () => {
                const v127 = v2?.prototype?.reverse;
                try { v127.call(a124); } catch (e) {}
            };
            try { v125(); } catch (e) {}
        };
        try { invalidReceivers.forEach(v123); } catch (e) {}
        const v136 = [1,2,3];
        let v137;
        try { v137 = new v2(v136); } catch (e) {}
        const v143 = {
            get() {
                let v142;
                try { v142 = new Error("length accessor called"); } catch (e) {}
                throw v142;
            },
        };
        let v145;
        try { v145 = Object.defineProperty(v137, "length", v143); } catch (e) {}
        try { v145.reverse(); } catch (e) {}
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e153) {
}
