function f0() {
}
for (const v7 of ["tr","TR","tr-TR","tr-u-co-search","tr-x-turkish"]) {
    ("İ").toLocaleLowerCase(v7);
    ("İ").toLocaleLowerCase([v7]);
    ("İ").toLocaleLowerCase([v7,"und"]);
    ("İ").toLocaleLowerCase(["und",v7]);
}
("İ").toLocaleLowerCase("trl");
("İ").toLocaleLowerCase(["trl"]);
for (const v42 of ["no_locale","tr-invalid_ext",["no_locale"],["en","no_locale"]]) {
    const v43 = () => {
        let v45;
        try { v45 = ("").toLocaleLowerCase(v42); } catch (e) {}
        return v45;
    };
    v43();
    const v48 = () => {
        let v50;
        try { v50 = ("x").toLocaleLowerCase(v42); } catch (e) {}
        return v50;
    };
    v48();
}
try { ("A").toLocaleLowerCase("x-x"); } catch (e) {}
try { ("A").toLocaleLowerCase("x-0"); } catch (e) {}
("A").toLocaleLowerCase();
("A").toLocaleLowerCase(undefined);
("A").toLocaleLowerCase([]);
("A").toLocaleLowerCase({});
("A").toLocaleLowerCase({ length: 0 });
const v81 = -1;
("A").toLocaleLowerCase({ length: v81 });
for (const v97 of [null,0,Math.PI,NaN,Infinity,true,false,Symbol()]) {
    const v98 = () => {
        const v99 = [v97];
        let v101;
        try { v101 = ("").toLocaleLowerCase(v99); } catch (e) {}
        return v101;
    };
    v98();
    const v104 = () => {
        const v105 = [v97];
        let v107;
        try { v107 = ("A").toLocaleLowerCase(v105); } catch (e) {}
        return v107;
    };
    v104();
}
for (const v111 of [null]) {
    const v112 = () => {
        const v113 = [v111];
        let v115;
        try { v115 = ("").toLocaleLowerCase(v113); } catch (e) {}
        return v115;
    };
    v112();
    const v118 = () => {
        const v119 = [v111];
        let v121;
        try { v121 = ("A").toLocaleLowerCase(v119); } catch (e) {}
        return v121;
    };
    v118();
}
for (const v129 of [0,Math.PI,NaN,Infinity,true,false,Symbol()]) {
    ("").toLocaleLowerCase(v129);
    ("A").toLocaleLowerCase(v129);
}
if (typeof f0 === "function") {
    f0(0, 0, "ok");
}
