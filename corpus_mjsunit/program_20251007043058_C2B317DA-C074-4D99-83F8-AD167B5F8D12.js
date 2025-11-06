function shift_array() {
    let array = [];
    Object.defineProperty(array, "length", { writable: false });
    let v8;
    try { v8 = array.shift(); } catch (e) {}
    return v8;
}
shift_array();
shift_array();
shift_array();
shift_array();
function shift_object() {
    let object = { length: 0 };
    Object.defineProperty(object, "length", { writable: false });
    let v22;
    try { v22 = object.shift(); } catch (e) {}
    return v22;
}
shift_object();
shift_object();
shift_object();
shift_object();
