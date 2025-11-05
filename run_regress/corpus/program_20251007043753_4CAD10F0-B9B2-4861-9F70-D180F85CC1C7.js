function SharedLazyArguments() {
    return arguments === arguments;
}
SharedLazyArguments();
function ArgumentsOverride(a6) {
    var arguments = 42;
    return (a6 = a6 ? a6 : 0) + arguments;
}
ArgumentsOverride();
ArgumentsOverride(1);
ArgumentsOverride(2, 3);
