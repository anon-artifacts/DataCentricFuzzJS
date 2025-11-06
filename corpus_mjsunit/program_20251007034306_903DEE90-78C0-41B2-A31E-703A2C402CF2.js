let x = "let x";
try { WScript.Echo(x); } catch (e) {}
const v5 = this?.x;
try { WScript.Echo(v5); } catch (e) {}
this.x = "global x";
try { WScript.Echo(x); } catch (e) {}
const v11 = this?.x;
try { WScript.Echo(v11); } catch (e) {}
const y = "const y";
try { WScript.Echo(y); } catch (e) {}
const v17 = this?.y;
try { WScript.Echo(v17); } catch (e) {}
function f22() {
    return "getter";
}
const v24 = { configurable: true, get: f22 };
try { Object.defineProperty(this, "y", v24); } catch (e) {}
try { WScript.Echo(y); } catch (e) {}
const v29 = this?.y;
try { WScript.Echo(v29); } catch (e) {}
