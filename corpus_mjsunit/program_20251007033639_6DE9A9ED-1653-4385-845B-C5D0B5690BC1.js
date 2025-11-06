var array = [];
try { ensureArrayStorage(array); } catch (e) {}
for (let i5 = 0; i5 < 1000; ++i5) {
    try { array.push(i5); } catch (e) {}
}
try { array.unshift(1, 2, 3, 4); } catch (e) {}
