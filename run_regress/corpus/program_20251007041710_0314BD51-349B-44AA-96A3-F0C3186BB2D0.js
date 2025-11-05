function f0() {
}
function foo() {
    foo.arguments.length;
    try { foo.caller(); } catch (e) {}
}
foo.arguments;
try { foo.caller(); } catch (e) {}
foo();
foo.arguments;
try { foo.caller(); } catch (e) {}
if (typeof f0 === "function") {
    f0(true, true);
}
f0("Tests complete");
