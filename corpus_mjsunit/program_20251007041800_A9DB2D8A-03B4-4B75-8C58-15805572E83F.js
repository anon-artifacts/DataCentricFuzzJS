var failed = false;
try {
    newGlobal().startTraceLogger();
    print("z");
} catch(e8) {
    failed = true;
}
