const v3 = -0;
var nonIterables = [true,1,v3,3.14,NaN,{},Math,this];
for (const v11 of nonIterables) {
    function f12() {
        try { new Map(v11); } catch (e) {}
    }
    try { f12(); } catch (e) {}
}
