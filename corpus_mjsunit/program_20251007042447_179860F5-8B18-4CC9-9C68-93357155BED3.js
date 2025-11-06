for (;;) {
    for (let i2 = 10; i2 >= 0; --i2) {
        for (let i9 = 0; i9 < 10; i9 += 4) {
            for (let i16 = 0; i16 < 10; i16 += 3) {
                print(i2, i9, i16);
            }
            i9--;
            i9--;
        }
    }
    break;
}
