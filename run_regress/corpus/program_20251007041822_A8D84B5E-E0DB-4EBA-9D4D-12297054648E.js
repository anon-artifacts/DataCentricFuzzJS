function f1() {
    return 3094;
}
try { String.raw(3094); } catch (e) {}
const v4 = f1.bind();
const v5 = v4.constructor;
try { v5(v4); } catch (e) {}
