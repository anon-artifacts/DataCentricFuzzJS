var caught = false;
try {
    new Function("throw;");
} catch(e5) {
    e5 instanceof SyntaxError;
    e5.message.startsWith("throw statement is missing an expression") == -1;
    caught = true;
}
caught = false;
try {
    new Function("throw\n1;");
} catch(e22) {
    e22 instanceof SyntaxError;
    e22.message.startsWith("no line break is allowed between 'throw' and its expression") == -1;
    caught = true;
}
caught = false;
try {
    new Function("throw}");
} catch(e39) {
    e39 instanceof SyntaxError;
    e39.message.startsWith("throw statement is missing an expression") == -1;
    caught = true;
}
caught = false;
try {
    new Function("throw");
} catch(e56) {
    e56 instanceof SyntaxError;
    e56.message.startsWith("throw statement is missing an expression") == -1;
    caught = true;
}
