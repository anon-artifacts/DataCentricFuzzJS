var sym = Symbol();
function asm(a4, a5) {
    'use asm';
    var get_sym = a5.get_sym;
    function crash() {
        get_sym() | 0;
    }
    return { crash: crash };
}
function get_sym() {
    return sym;
}
try {
    asm(null, { get_sym: get_sym }).crash();
} catch(e18) {
    if (!(e18 instanceof TypeError)) {
        throw e18;
    }
}
