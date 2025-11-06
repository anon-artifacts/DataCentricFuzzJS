console.log("This tests that speculation recovery of destructive additions on unboxed integers works.");
function destructiveAddForBoxedInteger(a4, a5, a6) {
    var a_ = a4.x;
    var d = a_ + a5;
    return (a6 + d) + a5;
}
for (let i14 = 0; i14 < 100; ++i14) {
    destructiveAddForBoxedInteger({ x: 1 }, 2, 3);
}
destructiveAddForBoxedInteger({ x: 1 }, 2, 4);
destructiveAddForBoxedInteger({ x: 2147483647 }, 2, 4);
destructiveAddForBoxedInteger({ x: 2 }, 2147483647, 4);
destructiveAddForBoxedInteger({ x: 2147483647 }, 2147483647, 4);
destructiveAddForBoxedInteger({ x: 1 }, 2, 2147483647);
