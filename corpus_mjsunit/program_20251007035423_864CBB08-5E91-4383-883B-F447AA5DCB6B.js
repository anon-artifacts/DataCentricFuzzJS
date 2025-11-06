function Cb(a1, a2) {
    var f;
    var g;
    for ((() => {
            f = a1.length;
        })();
        f--;
        ) {
        g = a1.charCodeAt(f);
    }
    return g;
}
var s1 = "long string to make cons string 1";
var s2 = "long string to make cons string 2";
Cb(s1 + s2);
Cb(s1);
var s3 = "string for triggering osr in Cb";
Cb(s3 + s3);
Cb(s1 + s2);
