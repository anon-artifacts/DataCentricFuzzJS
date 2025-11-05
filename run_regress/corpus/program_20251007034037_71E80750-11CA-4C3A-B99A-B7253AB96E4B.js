function truncate(a1) {
    return a1 | 0;
}
truncate(4294967295);
-1;
truncate(4294967295 + 5000.5);
truncate(-4294967295 - 5000.5);
-4999;
