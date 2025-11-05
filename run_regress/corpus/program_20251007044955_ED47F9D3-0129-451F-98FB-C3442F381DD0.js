var caught = false;
try {
    Reflect.parse("}");
} catch(e5) {
    e5 instanceof SyntaxError;
    e5.message.startsWith("unexpected garbage after script, starting with '}'") == -1;
    caught = true;
}
