function f0() {
}
const v2 = () => {
    const v6 = Month?.July;
    let v8;
    try { v8 = new Date(2018, v6, 14); } catch (e) {}
    let dt = v8;
    const v11 = () => {
    };
    try { withLocale("en", v11); } catch (e) {}
    const v16 = () => {
    };
    try { withLocale("fr", v16); } catch (e) {}
    const v20 = () => {
    };
    try { withLocale("de", v20); } catch (e) {}
    const v24 = () => {
    };
    try { withLocale("ar", v24); } catch (e) {}
    const v28 = () => {
    };
    try { withLocale("zh", v28); } catch (e) {}
};
try { inTimeZone("Europe/Paris", v2); } catch (e) {}
const v34 = () => {
    const v38 = Month?.July;
    let v40;
    try { v40 = new Date(2018, v38, 14); } catch (e) {}
    let dt = v40;
    const v43 = () => {
    };
    try { withLocale("en", v43); } catch (e) {}
    const v48 = () => {
    };
    try { withLocale("fr", v48); } catch (e) {}
    const v52 = () => {
    };
    try { withLocale("de", v52); } catch (e) {}
    const v56 = () => {
    };
    try { withLocale("ar", v56); } catch (e) {}
    const v60 = () => {
    };
    try { withLocale("zh", v60); } catch (e) {}
};
try { inTimeZone("America/Los_Angeles", v34); } catch (e) {}
for (const v73 of ["UTC","UCT","Zulu","Universal","Etc/UTC","Etc/UCT","Etc/Zulu","Etc/Universal"]) {
    const v74 = () => {
        const v78 = Month?.July;
        let v80;
        try { v80 = new Date(2018, v78, 14); } catch (e) {}
        let dt = v80;
        const v83 = () => {
        };
        try { withLocale("en", v83); } catch (e) {}
        const v88 = () => {
        };
        try { withLocale("fr", v88); } catch (e) {}
        const v92 = () => {
        };
        try { withLocale("de", v92); } catch (e) {}
        const v96 = () => {
        };
        try { withLocale("ar", v96); } catch (e) {}
        const v100 = () => {
        };
        try { withLocale("zh", v100); } catch (e) {}
    };
    try { inTimeZone(v73, v74); } catch (e) {}
}
for (const v107 of ["GMT","Etc/GMT"]) {
    const v108 = () => {
        const v112 = Month?.July;
        let v114;
        try { v114 = new Date(2018, v112, 14); } catch (e) {}
        let dt = v114;
        const v117 = () => {
        };
        try { withLocale("en", v117); } catch (e) {}
        const v122 = () => {
        };
        try { withLocale("fr", v122); } catch (e) {}
        const v126 = () => {
        };
        try { withLocale("de", v126); } catch (e) {}
        const v130 = () => {
        };
        try { withLocale("ar", v130); } catch (e) {}
        const v134 = () => {
        };
        try { withLocale("zh", v134); } catch (e) {}
    };
    try { inTimeZone(v107, v108); } catch (e) {}
}
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
