function countArguments() {
    var count = 0;
    for (const v4 in arguments) {
        count++;
    }
    return count;
}
function setArgumentCount() {
    arguments[10] = 5;
    arguments.x = 4;
    var count = 0;
    for (const v14 in arguments) {
        count++;
    }
    return count;
}
countArguments();
countArguments(1);
countArguments(1, 2);
countArguments(1, 2, 3, 4, 5);
setArgumentCount();
setArgumentCount(1);
setArgumentCount(1, 2);
setArgumentCount(1, 2, 3, 4, 5);
