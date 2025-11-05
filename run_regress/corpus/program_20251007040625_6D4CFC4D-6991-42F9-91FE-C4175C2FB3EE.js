try {
    try { console.log("This test checks that toString() does not have a problem when an object has itself as a property."); } catch (e) {}
    var array = [];
    array[0] = array;
    array + "";
    let v8;
    try { v8 = new Error(); } catch (e) {}
    var error = v8;
    error.name = error;
    error.message = error;
    error + "";
    var regexp = /a/;
    regexp.source = regexp;
    regexp + "";
} catch(e16) {
}
