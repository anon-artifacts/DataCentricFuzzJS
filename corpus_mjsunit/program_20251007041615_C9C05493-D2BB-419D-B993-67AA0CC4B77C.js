function foo(a1) {
    for (const v2 of a1) {
        a1[100] = 1;
    }
}
const v5 = [1];
try { foo(v5); } catch (e) {}
const v8 = [1];
try { foo(v8); } catch (e) {}
const v11 = [1];
try { foo(v11); } catch (e) {}
const v14 = [1];
try { foo(v14); } catch (e) {}
try { foo(); } catch (e) {}
