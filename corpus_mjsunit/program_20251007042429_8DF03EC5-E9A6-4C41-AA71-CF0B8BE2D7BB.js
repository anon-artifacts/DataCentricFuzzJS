function testNonExtensible() {
    var a = [1,2,3,,5];
    try { Object.preventExtensions(a); } catch (e) {}
    const v15 = { value: 7, enumerable: true, configurable: true, writable: true };
    try { Object.defineProperty(a, 1, v15); } catch (e) {}
    let v18;
    try { v18 = Object.getOwnPropertyDescriptor(a, 1); } catch (e) {}
    try { JSON.stringify(v18); } catch (e) {}
    `{"value":7,"writable":true,"enumerable":true,"configurable":true}`;
    const v27 = { value: 9, enumerable: true, configurable: true, writable: false };
    try { Object.defineProperty(a, 1, v27); } catch (e) {}
    let v30;
    try { v30 = Object.getOwnPropertyDescriptor(a, 1); } catch (e) {}
    try { JSON.stringify(v30); } catch (e) {}
    `{"value":9,"writable":false,"enumerable":true,"configurable":true}`;
    const v38 = { value: 4, enumerable: true, configurable: false, writable: true };
    try { Object.defineProperty(a, 0, v38); } catch (e) {}
    let v41;
    try { v41 = Object.getOwnPropertyDescriptor(a, 0); } catch (e) {}
    try { JSON.stringify(v41); } catch (e) {}
    `{"value":4,"writable":true,"enumerable":true,"configurable":false}`;
    const v49 = { value: 3, enumerable: false, configurable: true, writable: true };
    try { Object.defineProperty(a, 2, v49); } catch (e) {}
    let v52;
    try { v52 = Object.getOwnPropertyDescriptor(a, 2); } catch (e) {}
    try { JSON.stringify(v52); } catch (e) {}
    `{"value":3,"writable":true,"enumerable":false,"configurable":true}`;
    const v56 = () => {
        return -2;
    };
    const v61 = { get: v56, enumerable: true, configurable: true };
    try { Object.defineProperty(a, 4, v61); } catch (e) {}
    const v63 = () => {
        const v69 = { value: 4, enumerable: true, configurable: true, writable: true };
        let v70;
        try { v70 = Object.defineProperty(a, 3, v69); } catch (e) {}
        return v70;
    };
    try { v63(); } catch (e) {}
    const v73 = () => {
        const v79 = { value: 4, enumerable: true, configurable: true, writable: true };
        let v80;
        try { v80 = Object.defineProperty(a, 10, v79); } catch (e) {}
        return v80;
    };
    try { v73(); } catch (e) {}
    try { a.toString(); } catch (e) {}
}
for (let i85 = 0; i85 < 15; i85++) {
    try { testNonExtensible(); } catch (e) {}
}
function testSealed() {
    var a = [1,2,3,,5];
    try { Object.seal(a); } catch (e) {}
    const v107 = { value: 7, enumerable: true, configurable: false, writable: true };
    try { Object.defineProperty(a, 1, v107); } catch (e) {}
    let v110;
    try { v110 = Object.getOwnPropertyDescriptor(a, 1); } catch (e) {}
    try { JSON.stringify(v110); } catch (e) {}
    `{"value":7,"writable":true,"enumerable":true,"configurable":false}`;
    const v119 = { value: 4, enumerable: true, configurable: false, writable: false };
    try { Object.defineProperty(a, 0, v119); } catch (e) {}
    const v121 = () => {
        const v127 = { value: 7, enumerable: true, configurable: true, writable: true };
        let v128;
        try { v128 = Object.defineProperty(a, 2, v127); } catch (e) {}
        return v128;
    };
    try { v121(); } catch (e) {}
    const v131 = () => {
        const v137 = { value: 7, enumerable: false, configurable: false, writable: true };
        let v138;
        try { v138 = Object.defineProperty(a, 2, v137); } catch (e) {}
        return v138;
    };
    try { v131(); } catch (e) {}
    const v140 = () => {
        const v142 = () => {
            return -2;
        };
        const v147 = { get: v142, enumerable: true, configurable: true };
        let v148;
        try { v148 = Object.defineProperty(a, 4, v147); } catch (e) {}
        return v148;
    };
    try { v140(); } catch (e) {}
    const v150 = () => {
        const v156 = { value: 4, enumerable: true, configurable: true, writable: true };
        let v157;
        try { v157 = Object.defineProperty(a, 3, v156); } catch (e) {}
        return v157;
    };
    try { v150(); } catch (e) {}
    const v159 = () => {
        const v165 = { value: 4, enumerable: true, configurable: true, writable: true };
        let v166;
        try { v166 = Object.defineProperty(a, 10, v165); } catch (e) {}
        return v166;
    };
    try { v159(); } catch (e) {}
    try { a.toString(); } catch (e) {}
}
for (let i171 = 0; i171 < 15; i171++) {
    try { testSealed(); } catch (e) {}
}
function testFrozen() {
    var a = [1,2,3,,5];
    try { Object.freeze(a); } catch (e) {}
    const v193 = { value: 1, enumerable: true, configurable: false, writable: false };
    try { Object.defineProperty(a, 0, v193); } catch (e) {}
    const v195 = () => {
        const v201 = { value: 7, enumerable: true, configurable: false, writable: false };
        let v202;
        try { v202 = Object.defineProperty(a, 1, v201); } catch (e) {}
        return v202;
    };
    try { v195(); } catch (e) {}
    const v205 = () => {
        const v211 = { value: 3, enumerable: true, configurable: true, writable: false };
        let v212;
        try { v212 = Object.defineProperty(a, 2, v211); } catch (e) {}
        return v212;
    };
    try { v205(); } catch (e) {}
    const v214 = () => {
        const v220 = { value: 3, enumerable: false, configurable: false, writable: false };
        let v221;
        try { v221 = Object.defineProperty(a, 2, v220); } catch (e) {}
        return v221;
    };
    try { v214(); } catch (e) {}
    const v223 = () => {
        const v225 = () => {
            return -2;
        };
        const v230 = { get: v225, enumerable: true, configurable: true };
        let v231;
        try { v231 = Object.defineProperty(a, 4, v230); } catch (e) {}
        return v231;
    };
    try { v223(); } catch (e) {}
    const v233 = () => {
        const v239 = { value: 4, enumerable: true, configurable: true, writable: true };
        let v240;
        try { v240 = Object.defineProperty(a, 3, v239); } catch (e) {}
        return v240;
    };
    try { v233(); } catch (e) {}
    const v242 = () => {
        const v248 = { value: 4, enumerable: true, configurable: true, writable: true };
        let v249;
        try { v249 = Object.defineProperty(a, 10, v248); } catch (e) {}
        return v249;
    };
    try { v242(); } catch (e) {}
    try { a.toString(); } catch (e) {}
}
for (let i254 = 0; i254 < 15; i254++) {
    try { testFrozen(); } catch (e) {}
}
