const v2 = new ArrayBuffer(8);
var ab = v2;
const v5 = new Int32Array(ab);
var i_view = v5;
i_view[0] = 0;
i_view[1] = 0;
const v10 = new Float64Array(ab);
var doubles = v10;
isNaN(doubles[0]);
var prototype = [2.5,2.5];
var array = [3.5,3.5];
array.__proto__ = prototype;
function boom(a24) {
    array[a24] = doubles[0];
    return array[a24];
}
isNaN(boom(0));
isNaN(boom(0));
isNaN(boom(0));
isNaN(boom(0));
isNaN(boom(0));
isNaN(boom(0));
