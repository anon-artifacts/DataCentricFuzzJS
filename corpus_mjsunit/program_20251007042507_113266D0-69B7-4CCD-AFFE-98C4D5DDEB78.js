function test() {
}
try { test(); } catch (e) {}
try { CollectGarbage(); } catch (e) {}
try { test(); } catch (e) {}
try { console.log("pass"); } catch (e) {}
