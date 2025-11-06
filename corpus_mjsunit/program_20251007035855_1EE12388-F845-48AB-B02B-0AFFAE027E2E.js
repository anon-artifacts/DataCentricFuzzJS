function isRegExpSyntaxError(a1) {
    try {
        const v3 = new RegExp(a1);
        var re = v3;
    } catch(e5) {
        if (e5 instanceof SyntaxError) {
            return true;
        }
    }
    return false;
}
isRegExpSyntaxError("[C-]");
isRegExpSyntaxError("[-C]");
isRegExpSyntaxError("[C-C]");
isRegExpSyntaxError("[C-C]");
isRegExpSyntaxError("[\b-\b]");
isRegExpSyntaxError("[\B-\B]");
isRegExpSyntaxError("[\b-\B]");
isRegExpSyntaxError("[\B-\b]");
isRegExpSyntaxError("[\s-\s]");
isRegExpSyntaxError("[\W-\s]");
isRegExpSyntaxError("[\s-\W]");
isRegExpSyntaxError("[\W-C]");
isRegExpSyntaxError("[\d-C]");
isRegExpSyntaxError("[\s-C]");
isRegExpSyntaxError("[\w-\b]");
isRegExpSyntaxError("[\w-\B]");
