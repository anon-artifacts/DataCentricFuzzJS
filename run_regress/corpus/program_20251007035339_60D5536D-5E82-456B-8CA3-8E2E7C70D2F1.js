{
    async function foo() {
    }
    typeof foo;
}
typeof foo;
function f6() {
    {
        async function bar() {
        }
    }
    typeof bar;
}
f6();
function f12() {
    var y;
    async function x() {
        y = 1;
    }
    {
        async function x() {
            y = 2;
        }
    }
    x();
}
f12();
