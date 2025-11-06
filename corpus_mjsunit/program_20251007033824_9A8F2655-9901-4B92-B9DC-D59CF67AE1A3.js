function TryCall(a1) {
    var caught = [];
    try {
        try { a1(); } catch (e) {}
    } catch(e5) {
        try { caught.push(e5); } catch (e) {}
    }
    try {
        try { new a1(); } catch (e) {}
    } catch(e8) {
        try { caught.push(e8); } catch (e) {}
    }
    caught[0] instanceof TypeError;
    caught[1] instanceof TypeError;
}
TryCall(this);
TryCall(Math);
TryCall(true);
TryCall(1234);
TryCall("hest");
var NonFunction = 42;
function WillThrow() {
    try { NonFunction(); } catch (e) {}
}
WillThrow();
WillThrow();
WillThrow();
WillThrow();
