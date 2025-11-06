try { gczeal(2, 2); } catch (e) {}
var stringA = "abcdef";
var stringB = "ghijk";
var stringC = "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
const v13 = (stringA + stringB) + stringC;
try { v13.replace("abc", "AA"); } catch (e) {}
