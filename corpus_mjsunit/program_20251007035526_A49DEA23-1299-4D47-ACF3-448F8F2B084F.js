function f24(a1) {
    let x = 1;
    {
        let x = 2;
        {
            let x = 3;
        }
        a1 + 1;
    }
}
for (let i14 = 0; i14 < 10; ++i14) {
    f24(12);
}
f24({});
