function loader(a1, a2, a3) {
    a1[a3] = a2[a3];
}
const v7 = new ArrayBuffer(8);
var ab = v7;
const v10 = new Int32Array(ab);
var i_view = v10;
i_view[0] = 0;
i_view[1] = 0;
const v15 = new Float64Array(ab);
var f_view = v15;
const v18 = new Float64Array(1);
var fixed_double_elements = v18;
function opt_store() {
    fixed_double_elements[0] = f_view[0];
}
opt_store();
opt_store();
opt_store();
const v26 = new Int32Array(fixed_double_elements.buffer);
var i32 = v26;
i_view[0];
i32[0];
i_view[1];
i32[1];
var doubles = [0.5];
loader(doubles, fixed_double_elements, 0);
loader(doubles, fixed_double_elements, 0);
loader(doubles, fixed_double_elements, 0);
doubles[0] !== undefined;
