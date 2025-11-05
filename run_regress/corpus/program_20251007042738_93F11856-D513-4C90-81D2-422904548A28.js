global = 1;
function boom(a3) {
    return global;
}
boom();
boom();
boom();
delete this.global;
try { boom(); } catch (e) {}
try { boom(); } catch (e) {}
