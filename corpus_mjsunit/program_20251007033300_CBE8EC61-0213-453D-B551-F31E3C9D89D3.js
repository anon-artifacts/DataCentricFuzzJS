var OMIT = {};
var WRITABLES = [true,false,OMIT];
{
    var desc = {};
    function put(a9, a10) {
        desc[a9] = a10;
        return a10;
    }
    function f11(a12) {
        put("writable", a12);
    }
    WRITABLES.forEach(f11);
}
