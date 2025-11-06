var thrown = false;
try {
    x = [0];
    for (let i6 = 0; i6 < 5; ++i6) {
        if (i6 == 3) {
            Object.freeze(x);
        } else {
            x.pop();
        }
    }
} catch(e19) {
    thrown = true;
    e19 instanceof TypeError;
}
