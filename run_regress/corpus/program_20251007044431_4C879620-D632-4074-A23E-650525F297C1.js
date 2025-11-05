s = "a%2b%20def%00A0";
let v4;
try { v4 = unescape(s); } catch (e) {}
res = v4;
try { isLatin1(res); } catch (e) {}
s = "a%2b%20def%00A0%u1200";
try { unescape(s); } catch (e) {}
s += "ሀ";
try { unescape(s); } catch (e) {}
s = "abc ÿ";
let v19;
try { v19 = escape(s); } catch (e) {}
res = v19;
try { isLatin1(res); } catch (e) {}
s += "ሀ";
let v24;
try { v24 = escape(s); } catch (e) {}
res = v24;
try { isLatin1(res); } catch (e) {}
