function f0() {
    return "invalid";
}
const t3 = Number?.prototype;
t3.toLocaleString = f0;
const v6 = [1];
try { v6.toLocaleString(); } catch (e) {}
const t7 = Number?.prototype;
t7.toLocaleString = "invalid";
function f10() {
    const v12 = [1];
    try { v12.toLocaleString(); } catch (e) {}
}
try { f10(); } catch (e) {}
const t14 = Number?.prototype;
delete t14?.toLocaleString;
function f17() {
    return "invalid";
}
const t19 = Number?.prototype;
t19.toString = f17;
const v21 = [1];
try { v21.toLocaleString(); } catch (e) {}
const v25 = [1];
try { v25.toString(); } catch (e) {}
