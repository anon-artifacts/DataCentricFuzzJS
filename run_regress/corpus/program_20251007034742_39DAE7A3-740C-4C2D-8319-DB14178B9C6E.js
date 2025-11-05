actual = "";
expected = "undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,";
var index;
function h() {
    for (let i8 = 0; i8 < 5; ++i8) {
        var a = arguments;
        const v16 = a?.[index];
        try { appendToActual(v16); } catch (e) {}
    }
}
index = 0;
try { h(); } catch (e) {}
index = -1;
try { h(); } catch (e) {}
index = 1;
try { h(); } catch (e) {}
index = -9999999;
try { h(1, 2, 3); } catch (e) {}
index = -1;
try { h(1, 2, 3); } catch (e) {}
index = 0;
try { h(1, 2, 3); } catch (e) {}
index = 1;
try { h(1, 2, 3); } catch (e) {}
index = 2;
try { h(1, 2, 3); } catch (e) {}
index = 3;
try { h(1, 2, 3); } catch (e) {}
index = 4;
try { h(1, 2, 3); } catch (e) {}
index = 9999999;
try { h(1, 2, 3); } catch (e) {}
