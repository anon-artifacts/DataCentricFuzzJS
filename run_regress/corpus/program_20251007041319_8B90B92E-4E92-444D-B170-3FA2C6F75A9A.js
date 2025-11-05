try {
    function f0() {
    }
    var BUGNUMBER = 1185106;
    var summary = "async name token in property and object destructuring pattern";
    const v7 = (BUGNUMBER + ": ") + summary;
    try { f0(v7); } catch (e) {}
    {
        let a = { async: 10 };
        a?.async;
    }
    {
        const v15 = {
            async() {
            },
        };
        let a = v15;
        a?.async instanceof Function;
        a?.async?.name;
    }
    {
        let async = 11;
        let a = { async: async };
        a?.async;
    }
    {
        let  = { async: 12 };
    }
    {
        let  = {};
    }
    {
        let  = {};
    }
    {
        let  = { async: 15, other: 16 };
        let a = { async: async, other: other };
        a?.async;
        a?.other;
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e63) {
}
