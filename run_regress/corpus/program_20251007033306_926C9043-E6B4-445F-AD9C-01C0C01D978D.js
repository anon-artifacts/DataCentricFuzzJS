try { gczeal(4); } catch (e) {}
function testInterpreterReentry7() {
    var arr = [0,1,2,3,4];
    for (let i12 = 1; i12 < 5; i12++) {
        arr[i12] = "grue";
    }
}
try { testInterpreterReentry7(); } catch (e) {}
