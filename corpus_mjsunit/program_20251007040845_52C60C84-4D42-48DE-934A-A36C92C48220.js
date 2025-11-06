var i = 0;
try { evaluate(""); } catch (e) {}
while (--i >= 0) {
    if (x > 0) {
        continue;
    }
    switch (i) {
        default:
            try { i(i); } catch (e) {}
    }
}
