try {
    function f0() {
    }
    var BUGNUMBER = 233483;
    var summary = "Don't crash with null properties - Browser only";
    var actual = "No Crash";
    var expect = "No Crash";
    try { f0(BUGNUMBER); } catch (e) {}
    try { f0(summary); } catch (e) {}
    gDelayTestDriverEnd = true;
    actual = "Crash";
    window.onload = onLoad;
    function onLoad() {
        let v18;
        try { v18 = new Array(); } catch (e) {}
        var a = v18;
        var pe;
        var x;
        var s;
        try { setform(); } catch (e) {}
        for ((() => {
                let v30;
                try { v30 = document.getElementById("test"); } catch (e) {}
                pe = v30;
            })();
            pe;
            (() => {
                pe = pe?.parentNode;
            })()) {
            a[a?.length] = pe;
        }
        let v33;
        try { v33 = a.toString(); } catch (e) {}
        s = v33;
        actual = "No Crash";
        try { f0(expect, actual, summary); } catch (e) {}
        gDelayTestDriverEnd = false;
    }
    function setform() {
        let v41;
        try { v41 = document.createElement("form"); } catch (e) {}
        const v42 = document?.body;
        let v43;
        try { v43 = v42.appendChild(v41); } catch (e) {}
        var form = v43;
        let v46;
        try { v46 = document.createElement("table"); } catch (e) {}
        let v47;
        try { v47 = form.appendChild(v46); } catch (e) {}
        var table = v47;
        let v50;
        try { v50 = document.createElement("tbody"); } catch (e) {}
        let v51;
        try { v51 = table.appendChild(v50); } catch (e) {}
        var tbody = v51;
        let v54;
        try { v54 = document.createElement("tr"); } catch (e) {}
        let v55;
        try { v55 = tbody.appendChild(v54); } catch (e) {}
        var tr = v55;
        let v58;
        try { v58 = document.createElement("td"); } catch (e) {}
        let v59;
        try { v59 = tr.appendChild(v58); } catch (e) {}
        var td = v59;
        let v62;
        try { v62 = document.createElement("input"); } catch (e) {}
        let v63;
        try { v63 = td.appendChild(v62); } catch (e) {}
        var input = v63;
        try { input.setAttribute("id", "test"); } catch (e) {}
        try { input.setAttribute("value", "1232"); } catch (e) {}
    }
} catch(e71) {
}
