var s = "aaaaaaaaaaaaaaaaaa111aaaa";
var latin1Rope1 = "foo" + s;
var latin1Rope2 = "bar" + latin1Rope1;
var twoByteRope = "ሀ--" + latin1Rope1;
try { twoByteRope.lastIndexOf("11"); } catch (e) {}
try { isLatin1(latin1Rope1); } catch (e) {}
let v18;
try { v18 = isLatin1(s); } catch (e) {}
if (v18) {
    try { isLatin1(latin1Rope2); } catch (e) {}
}
try { latin1Rope2.lastIndexOf("11"); } catch (e) {}
