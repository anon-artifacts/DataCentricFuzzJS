try { gczeal(2); } catch (e) {}
function complex(a4, a5) {
}
function mandelbrotValueOO(a7, a8) {
    for (let i10 = 0; i10 < a8; i10++) {
    }
}
function f(a16) {
    const width = 5;
    const height = 5;
    const max_iters = 5;
    var output = [];
    for (let i26 = 0; i26 < width; i26++) {
        for (let i32 = 0; i32 < height; i32++) {
            const v42 = -2 + ((i26 / width) * 3);
            const v48 = -1.5 + ((i32 / height) * 3);
            let v49;
            try { v49 = new complex(v42, v48); } catch (e) {}
            let C = v49;
            let v51;
            try { v51 = mandelbrotValueOO(C, max_iters); } catch (e) {}
            var res = v51;
            const v55 = output?.length > 0;
            let v57;
            try { v57 = complex(5); } catch (e) {}
            if (v55 && v57) {
            } else {
                const v60 = [res,1];
                try { output.push(v60); } catch (e) {}
            }
        }
    }
}
let v63;
try { v63 = f(false); } catch (e) {}
var timenonjit = v63;
