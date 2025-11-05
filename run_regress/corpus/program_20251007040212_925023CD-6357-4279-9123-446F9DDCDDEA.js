function f0() {
    const v1 = (a2) => {
        let v4;
        try { v4 = saveStack(); } catch (e) {}
        return v4;
    };
    const v6 = [3];
    let v7;
    try { v7 = v6.map(v1); } catch (e) {}
    let v8;
    try { v8 = v7.pop(); } catch (e) {}
    return v8;
}
let v9;
try { v9 = f0(); } catch (e) {}
const map = v9;
map?.parent?.functionDisplayName;
map?.parent?.source;
function f17() {
    const v18 = () => {
        let v20;
        try { v20 = saveStack(); } catch (e) {}
        return v20;
    };
    const v23 = [3];
    let v24;
    try { v24 = v23.reduce(v18, 3); } catch (e) {}
    return v24;
}
let v25;
try { v25 = f17(); } catch (e) {}
const reduce = v25;
reduce?.parent?.functionDisplayName;
reduce?.parent?.source;
function f33() {
    try {
        const v34 = (a35) => {
            let v37;
            try { v37 = saveStack(); } catch (e) {}
            throw v37;
        };
        const v39 = [3];
        try { v39.forEach(v34); } catch (e) {}
    } catch(e41) {
        return e41;
    }
}
let v42;
try { v42 = f33(); } catch (e) {}
const forEach = v42;
forEach?.parent?.functionDisplayName;
forEach?.parent?.source;
