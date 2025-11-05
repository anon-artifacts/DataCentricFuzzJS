try {
    const s = ("a").padStart(2147483648 - 1);
    JSON.stringify(s);
} catch(e8) {
}
