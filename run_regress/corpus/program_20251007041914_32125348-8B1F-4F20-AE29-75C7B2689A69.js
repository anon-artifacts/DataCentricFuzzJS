function init_array(a1) {
    for (let i3 = 0; i3 < 10; ++i3) {
        a1[i3] = i3;
    }
}
function init_sparse_array(a10) {
    for (let i12 = 0; i12 < 10; ++i12) {
        a10[i12] = i12;
    }
    a10[200000] = 256;
    let v20;
    try { v20 = f(a10); } catch (e) {}
    return v20;
}
function testPolymorphicLoads() {
    function make_polymorphic_load_function() {
        function load(a24, a25) {
            return a24?.[a24];
        }
        let v28;
        try { v28 = new Object(); } catch (e) {}
        var object_array = v28;
        let v30;
        try { v30 = new Object(); } catch (e) {}
        var sparse_object_array = v30;
        let v34;
        try { v34 = new Array(10); } catch (e) {}
        var js_array = v34;
        const v36 = [];
        let v38;
        try { v38 = f(v36); } catch (e) {}
        var sparse_js_array = v38;
        try { init_array(object_array); } catch (e) {}
        try { init_array(js_array); } catch (e) {}
        try { init_sparse_array(sparse_object_array); } catch (e) {}
        try { init_sparse_array(sparse_js_array); } catch (e) {}
        try { load(object_array, 1); } catch (e) {}
        try { load(js_array, 1); } catch (e) {}
        try { load(sparse_object_array, 1); } catch (e) {}
        try { load(sparse_js_array, 1); } catch (e) {}
        return load;
    }
    const v57 = new Object();
    var object_array = v57;
    const v59 = new Object();
    var sparse_object_array = v59;
    const v63 = new Array(10);
    var js_array = v63;
    const v65 = [];
    let v67;
    try { v67 = f(v65); } catch (e) {}
    var sparse_js_array = v67;
    try { init_array(object_array); } catch (e) {}
    try { init_array(js_array); } catch (e) {}
    try { init_sparse_array(sparse_object_array); } catch (e) {}
    try { init_sparse_array(sparse_js_array); } catch (e) {}
    let v73;
    try { v73 = make_polymorphic_load_function(); } catch (e) {}
    load = v73;
    let v76;
    try { v76 = new Object(); } catch (e) {}
    try { load(js_array, v76); } catch (e) {}
    let v79;
    try { v79 = make_polymorphic_load_function(); } catch (e) {}
    load = v79;
    let v81;
    try { v81 = new Object(); } catch (e) {}
    try { load(object_array, v81); } catch (e) {}
    let v83;
    try { v83 = make_polymorphic_load_function(); } catch (e) {}
    load = v83;
    let v85;
    try { v85 = new Object(); } catch (e) {}
    try { load(sparse_js_array, v85); } catch (e) {}
    let v87;
    try { v87 = make_polymorphic_load_function(); } catch (e) {}
    load = v87;
    let v89;
    try { v89 = new Object(); } catch (e) {}
    try { load(sparse_object_array, v89); } catch (e) {}
    let v91;
    try { v91 = make_polymorphic_load_function(); } catch (e) {}
    load = v91;
    try { load(object_array, 1); } catch (e) {}
    try { load(js_array, 1); } catch (e) {}
    try { load(sparse_object_array, 1); } catch (e) {}
    try { load(sparse_js_array, 1); } catch (e) {}
    let v104;
    try { v104 = make_polymorphic_load_function(); } catch (e) {}
    load = v104;
    let v106;
    try { v106 = new Object(); } catch (e) {}
    try { load(js_array, v106); } catch (e) {}
    let v108;
    try { v108 = make_polymorphic_load_function(); } catch (e) {}
    load = v108;
    let v110;
    try { v110 = new Object(); } catch (e) {}
    try { load(object_array, v110); } catch (e) {}
    let v112;
    try { v112 = make_polymorphic_load_function(); } catch (e) {}
    load = v112;
    let v114;
    try { v114 = new Object(); } catch (e) {}
    try { load(sparse_js_array, v114); } catch (e) {}
    let v116;
    try { v116 = make_polymorphic_load_function(); } catch (e) {}
    load = v116;
    let v118;
    try { v118 = new Object(); } catch (e) {}
    try { load(sparse_object_array, v118); } catch (e) {}
}
function testPolymorphicStores() {
    function make_polymorphic_store_function() {
        function store(a123, a124, a125) {
            a123[a124] = a125;
        }
        let v127;
        try { v127 = new Object(); } catch (e) {}
        var object_array = v127;
        let v129;
        try { v129 = new Object(); } catch (e) {}
        var sparse_object_array = v129;
        let v133;
        try { v133 = new Array(10); } catch (e) {}
        var js_array = v133;
        var sparse_js_array = [];
        sparse_js_array.length = 200001;
        try { init_array(object_array); } catch (e) {}
        try { init_array(js_array); } catch (e) {}
        try { init_sparse_array(sparse_object_array); } catch (e) {}
        try { init_sparse_array(sparse_js_array); } catch (e) {}
        try { store(object_array, 1, 256); } catch (e) {}
        try { store(js_array, 1, 256); } catch (e) {}
        try { store(sparse_object_array, 1, 256); } catch (e) {}
        try { store(sparse_js_array, 1, 256); } catch (e) {}
        return store;
    }
    const v155 = new Object();
    var object_array = v155;
    const v157 = new Object();
    var sparse_object_array = v157;
    const v161 = new Array(10);
    var js_array = v161;
    const v163 = [];
    let v165;
    try { v165 = f(v163); } catch (e) {}
    var sparse_js_array = v165;
    sparse_js_array.length = 200001;
    try { init_array(object_array); } catch (e) {}
    try { init_array(js_array); } catch (e) {}
    try { init_sparse_array(sparse_object_array); } catch (e) {}
    try { init_sparse_array(sparse_js_array); } catch (e) {}
    let v172;
    try { v172 = make_polymorphic_store_function(); } catch (e) {}
    store = v172;
    try { store(object_array, 2, 257); } catch (e) {}
    let v178;
    try { v178 = make_polymorphic_store_function(); } catch (e) {}
    store = v178;
    try { store(js_array, 2, 257); } catch (e) {}
    let v182;
    try { v182 = make_polymorphic_store_function(); } catch (e) {}
    store = v182;
    try { store(sparse_object_array, 2, 257); } catch (e) {}
    let v186;
    try { v186 = make_polymorphic_store_function(); } catch (e) {}
    store = v186;
    try { store(sparse_js_array, 2, 257); } catch (e) {}
    object_array?.[2];
    js_array?.[2];
    sparse_js_array?.[2];
    sparse_object_array?.[2];
    let v198;
    try { v198 = make_polymorphic_store_function(); } catch (e) {}
    store = v198;
    try { store(object_array, 3, 258); } catch (e) {}
    let v202;
    try { v202 = make_polymorphic_store_function(); } catch (e) {}
    store = v202;
    try { store(js_array, 3, 258); } catch (e) {}
    let v206;
    try { v206 = make_polymorphic_store_function(); } catch (e) {}
    store = v206;
    try { store(sparse_object_array, 3, 258); } catch (e) {}
    let v210;
    try { v210 = make_polymorphic_store_function(); } catch (e) {}
    store = v210;
    try { store(sparse_js_array, 3, 258); } catch (e) {}
    object_array?.[3];
    js_array?.[3];
    sparse_js_array?.[3];
    sparse_object_array?.[3];
}
try { testPolymorphicLoads(); } catch (e) {}
try { testPolymorphicStores(); } catch (e) {}
