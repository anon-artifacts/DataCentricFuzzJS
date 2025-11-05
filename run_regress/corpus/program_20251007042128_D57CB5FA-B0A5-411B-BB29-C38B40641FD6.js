var s = "abcdef,g,,";
let v3;
try { v3 = s.split(","); } catch (e) {}
var res = v3;
res?.[0];
const v7 = res?.[0];
try { isLatin1(v7); } catch (e) {}
res?.[1];
res?.[2];
res?.[3];
s = "abcdef,gh,,";
let v19;
try { v19 = s.split("ሀ"); } catch (e) {}
res = v19;
res?.[0];
const v22 = res?.[0];
try { isLatin1(v22); } catch (e) {}
s = "abcdefሀሀ,g,,";
let v27;
try { v27 = s.split(","); } catch (e) {}
res = v27;
res?.[0];
const v30 = res?.[0];
try { isLatin1(v30); } catch (e) {}
res?.[1];
res?.[2];
res?.[3];
let v40;
try { v40 = s.split("ሀ"); } catch (e) {}
res = v40;
res?.[0];
res?.[1];
res?.[2];
