try {
    function f0() {
    }
    for (const v2 of anyTypedArrayConstructors) {
        var hits = 0;
        var obj = {};
        function f(a8) {
            hits++;
        }
        const v14 = ["a","b","c"];
        try { v2.from(v14, f, obj); } catch (e) {}
        hits = 0;
        function gs(a19) {
            'use strict';
            hits++;
        }
        try { v2.from("def", gs); } catch (e) {}
        var global = this;
        hits = 0;
        function g(a30) {
            hits++;
        }
        try { v2.from("ghi", g); } catch (e) {}
        for (const v40 of [0,"str",,]) {
            hits = 0;
            function h(a43) {
                'use strict';
                hits++;
            }
            var mapfn = h;
            try { v2.from("pq", mapfn, v40); } catch (e) {}
        }
        for (const v54 of [0,"str",true]) {
            hits = 0;
            function h(a57) {
                try { Object(v54); } catch (e) {}
                hits++;
            }
            var mapfn = h;
            try { v2.from("pq", mapfn, v54); } catch (e) {}
        }
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e72) {
}
