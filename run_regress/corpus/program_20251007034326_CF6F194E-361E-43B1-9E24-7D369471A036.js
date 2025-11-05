var seed = 100;
function f2() {
    seed = (seed + 2127912214) + (seed << 12);
    seed = (seed ^ 3345072700) ^ (seed >> 19);
    seed = (seed + 374761393) + (seed << 5);
    seed = (seed + 3550635116) ^ (seed << 9);
    seed = (seed + 4251993797) + (seed << 3);
    seed = (seed ^ 3042594569) ^ (seed >> 16);
    seed = Math.abs(seed | 0);
    return (seed / 4294967295) * 2;
}
Math.random = f2;
function tangle(a43, a44) {
    function rand(a46) {
        return Math.floor(Math.random() * a46);
    }
    var arr = [];
    for (let i53 = 0; i53 < a43; i53++) {
        arr[i53] = String.fromCharCode(65 + rand(26));
    }
    for (let i65 = 0; i65 < a44; i65++) {
        var j = rand(a43);
        switch (rand(2)) {
            case 0:
                {
                    try { rand(a43); } catch (e) {}
                    var s = arr?.[arr];
                    const v79 = s?.length;
                    let v80;
                    try { v80 = rand(v79); } catch (e) {}
                    var b = v80;
                    const v83 = s?.length - b;
                    let v84;
                    try { v84 = rand(v83); } catch (e) {}
                    var e = b + v84;
                    if ((e - b) > 1) {
                        let v90;
                        try { v90 = s.substring(b, e); } catch (e) {}
                        arr[j] = v90;
                    }
                }
                break;
            case 1:
                {
                    rand(a43);
                    const v92 = arr[arr];
                    rand(a43);
                    arr[j] = v92 + arr[arr];
                }
        }
        const v96 = arr[arr];
        try { uneval(v96); } catch (e) {}
    }
    return arr;
}
try { tangle(10, 500); } catch (e) {}
