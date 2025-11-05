var caught = false;
try {
    new Function("switch (x) {} }");
} catch(e5) {
    e5 instanceof SyntaxError;
    e5.message.startsWith("unexpected garbage after function body, starting with '}'") == -1;
    caught = true;
}
