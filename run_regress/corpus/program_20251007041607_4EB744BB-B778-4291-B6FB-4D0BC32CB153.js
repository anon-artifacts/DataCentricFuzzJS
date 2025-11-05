console.log("Test to make sure we don't incorrectly insert a semi colon after a break statement");
do {
    if (0) {
        break;
    } else {
    }
} while (0)
do {
    if (0) {
        continue;
    } else {
    }
} while (0)
function f9() {
    if (0) {
        return;
    } else {
        return true;
    }
}
f9();
do {
    if (0) {
        throw "x";
    } else {
    }
} while (0)
try {
    if (0) {
        throw "Shouldn't have parsed this.";
    }
} catch(e19) {
}
