function AsmModuleFloat(a1) {
    'use asm';
    var fround = a1.Math.fround;
    function rem(a6, a7) {
        return fround((a6 = fround(a6)) % (a7 = fround(a7)));
    }
    return { rem: rem };
}
var asmModuleFloat = AsmModuleFloat({ Math: Math });
print(asmModuleFloat.rem(1, 1));
