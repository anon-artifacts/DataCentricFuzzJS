function produce_object() {
    var real_length = 1;
    function set_length() {
        real_length = "boom";
    }
    function get_length() {
        return real_length;
    }
    const v7 = Array.prototype;
    var o = { __proto__: v7, 0: "x" };
    Object.defineProperty(o, "length", { set: set_length, get: get_length });
    return o;
}
produce_object().push("y");
produce_object().unshift("y");
