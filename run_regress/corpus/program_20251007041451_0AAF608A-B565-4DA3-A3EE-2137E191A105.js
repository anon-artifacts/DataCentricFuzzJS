actual = "";
expected = "10,";
function f(a5) {
    {
        let x2 = 10;
        for (let i9 = 0; i9 < 5; ++i9) {
            function f15() {
                try { appendToActual(x2); } catch (e) {}
            }
            var g = f15;
        }
        try { g(); } catch (e) {}
    }
}
f(1);
