const v0 = {};
const v1 = {};
var o = [v0,v1,{ i: 42 }];
var i;
var s = [];
for (let i11 = 0; i11 < 3; ++i11) {
    with (o[i11]) {
        for ((() => {
                i = 0;
            })();
            i < 2;
            ++i) {
            s.push(i11);
            s.push(i);
        }
    }
}
s.join();
