function loop(a1) {
    loop(a1.replace(/\s/g, ""));
}
try {
    loop("No");
} catch(e8) {
}
