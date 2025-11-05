function generate_dictionary_array() {
    var result = [0,1,2,3,4];
    result[256 * 1024] = 5;
    return result;
}
function get_accessor(a13, a14) {
    return a13[a14];
}
var array1 = generate_dictionary_array();
get_accessor(array1, 1);
get_accessor(array1, 2);
get_accessor(12345, 2);
