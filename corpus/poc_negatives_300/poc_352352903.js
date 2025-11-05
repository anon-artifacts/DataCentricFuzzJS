for (let a = 0; a < 25; a++) {
    const b = a & a;
    try { b(b, b, b); } catch (e) {}
}
//.\d8.exe --jit-fuzzing 2024-7-11-0.js