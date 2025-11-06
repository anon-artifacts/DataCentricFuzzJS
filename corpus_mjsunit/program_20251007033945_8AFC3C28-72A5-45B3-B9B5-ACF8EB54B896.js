function f0() {
    function __ZNK4Math5plane3dotERKNS_6float4E(a2, a3) {
        a2 = a2 | 0;
        a3 = a3 | 0;
        return +((((+HEAPF32[a2 >> 2] * +HEAPF32[a3 >> 2]) + (+HEAPF32[(a2 + 4) >> 2] * +HEAPF32[(a3 + 4) >> 2])) + (+HEAPF32[(a2 + 8) >> 2] * +HEAPF32[(a3 + 8) >> 2])) + (+HEAPF32[(a2 + 12) >> 2] * +HEAPF32[(a3 + 12) >> 2]));
    }
    function __ZNK4Math7frustum8clipmaskERKNS_5pointE(a62, a63) {
        a62 = a62 | 0;
        a63 = a63 | 0;
        var i3 = 0;
        var i4 = 0;
        i3 = a63 | 0;
        a63 = (+__ZNK4Math5plane3dotERKNS_6float4E(a62 | 0, i3) > 0) & 1;
        i4 = +__ZNK4Math5plane3dotERKNS_6float4E((a62 + 16) | 0, i3) > 0 ? a63 | 2 : a63;
        a63 = +__ZNK4Math5plane3dotERKNS_6float4E((a62 + 32) | 0, i3) > 0 ? i4 | 4 : i4;
        i4 = +__ZNK4Math5plane3dotERKNS_6float4E((a62 + 48) | 0, i3) > 0 ? a63 | 8 : a63;
        a63 = +__ZNK4Math5plane3dotERKNS_6float4E((a62 + 64) | 0, i3) > 0 ? i4 | 16 : i4;
        return (+__ZNK4Math5plane3dotERKNS_6float4E((a62 + 80) | 0, i3) > 0 ? a63 | 32 : a63) | 0;
    }
    function __ZNK4Math7frustum10clipstatusERKNS_4bboxE(a140, a141) {
        a140 = a140 | 0;
        a141 = a141 | 0;
        var i3 = 0;
        var i4 = 0;
        var i5 = 0;
        var i6 = 0;
        var i7 = 0;
        var i8 = 0;
        var i9 = 0;
        var i10 = 0;
        var i11 = 0;
        var i12 = 0;
        var i13 = 0;
        var i14 = 0;
        var i15 = 0;
        var i16 = 0;
        var d17 = 0;
        var d18 = 0;
        var i19 = 0;
        var i20 = 0;
        var i21 = 0;
        var i22 = 0;
        i3 = STACKTOP;
        STACKTOP = (STACKTOP + 16) | 0;
        HEAPF32[(i5 = (i4 = i3 | 0) | 0) >> 2] = 0;
        HEAPF32[(i6 = (i4 + 4) | 0) >> 2] = 0;
        HEAPF32[(i7 = (i4 + 8) | 0) >> 2] = 0;
        HEAPF32[(i8 = (i4 + 12) | 0) >> 2] = 1;
        i9 = a141 | 0;
        i10 = (a141 + 4) | 0;
        i11 = (a141 + 8) | 0;
        i12 = (a141 + 20) | 0;
        i13 = (a141 + 16) | 0;
        i14 = (a141 + 24) | 0;
        a141 = 65535;
        i15 = 0;
        i16 = 0;
        while (1) {
            if ((i16 | 0) == 1) {
                d17 = +HEAPF32[i12 >> 2];
                d18 = +HEAPF32[i11 >> 2];
                const v261 = +HEAPF32[i9 >> 2];
                HEAPF32[i5 >> 2] = v261;
                HEAPF32[i6 >> 2] = d17;
                HEAPF32[i7 >> 2] = d18;
                HEAPF32[i8 >> 2] = 1;
            } else {
                if ((i16 | 0) == 4) {
                    const v278 = +HEAPF32[i13 >> 2];
                    HEAPF32[i5 >> 2] = v278;
                    const v284 = +HEAPF32[i12 >> 2];
                    HEAPF32[i6 >> 2] = v284;
                    const v290 = +HEAPF32[i14 >> 2];
                    HEAPF32[i7 >> 2] = v290;
                    HEAPF32[i8 >> 2] = 1;
                } else {
                    if ((i16 | 0) == 6) {
                        d18 = +HEAPF32[i10 >> 2];
                        d17 = +HEAPF32[i14 >> 2];
                        const v311 = +HEAPF32[i9 >> 2];
                        HEAPF32[i5 >> 2] = v311;
                        HEAPF32[i6 >> 2] = d18;
                        HEAPF32[i7 >> 2] = d17;
                        HEAPF32[i8 >> 2] = 1;
                    } else {
                        if ((i16 | 0) == 5) {
                            d17 = +HEAPF32[i12 >> 2];
                            d18 = +HEAPF32[i14 >> 2];
                            const v336 = +HEAPF32[i9 >> 2];
                            HEAPF32[i5 >> 2] = v336;
                            HEAPF32[i6 >> 2] = d17;
                            HEAPF32[i7 >> 2] = d18;
                            HEAPF32[i8 >> 2] = 1;
                        } else {
                            if ((i16 | 0) == 3) {
                                d18 = +HEAPF32[i10 >> 2];
                                d17 = +HEAPF32[i11 >> 2];
                                const v361 = +HEAPF32[i13 >> 2];
                                HEAPF32[i5 >> 2] = v361;
                                HEAPF32[i6 >> 2] = d18;
                                HEAPF32[i7 >> 2] = d17;
                                HEAPF32[i8 >> 2] = 1;
                            } else {
                                if ((i16 | 0) == 0) {
                                    const v378 = +HEAPF32[i9 >> 2];
                                    HEAPF32[i5 >> 2] = v378;
                                    const v384 = +HEAPF32[i10 >> 2];
                                    HEAPF32[i6 >> 2] = v384;
                                    const v390 = +HEAPF32[i11 >> 2];
                                    HEAPF32[i7 >> 2] = v390;
                                    HEAPF32[i8 >> 2] = 1;
                                } else {
                                    if ((i16 | 0) == 2) {
                                        d17 = +HEAPF32[i12 >> 2];
                                        d18 = +HEAPF32[i11 >> 2];
                                        const v411 = +HEAPF32[i13 >> 2];
                                        HEAPF32[i5 >> 2] = v411;
                                        HEAPF32[i6 >> 2] = d17;
                                        HEAPF32[i7 >> 2] = d18;
                                        HEAPF32[i8 >> 2] = 1;
                                    } else {
                                        if ((i16 | 0) == 7) {
                                            d18 = +HEAPF32[i10 >> 2];
                                            d17 = +HEAPF32[i14 >> 2];
                                            const v436 = +HEAPF32[i13 >> 2];
                                            HEAPF32[i5 >> 2] = v436;
                                            HEAPF32[i6 >> 2] = d18;
                                            HEAPF32[i7 >> 2] = d17;
                                            HEAPF32[i8 >> 2] = 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            i19 = __ZNK4Math7frustum8clipmaskERKNS_5pointE(a140, i4) | 0;
            i20 = i19 & a141;
            i21 = i19 | i15;
            i19 = (i16 + 1) | 0;
            if ((i19 | 0) == 8) {
                break;
            } else {
                a141 = i20;
                i15 = i21;
                i16 = i19;
            }
        }
        if ((i21 | 0) == 0) {
            i22 = 0;
            STACKTOP = i3;
            return i22 | 0;
        }
        i22 = (i20 | 0) == 0 ? 2 : 1;
        STACKTOP = i3;
        return i22 | 0;
    }
    var STACKTOP = 0;
    const v479 = new Float32Array(1000);
    var HEAPF32 = v479;
    for (let i482 = 0; i482 < HEAPF32.length; i482++) {
        HEAPF32[i482] = 1;
    }
    __ZNK4Math7frustum10clipstatusERKNS_4bboxE(0, 0);
    __ZNK4Math7frustum10clipstatusERKNS_4bboxE(0, 0);
    __ZNK4Math7frustum10clipstatusERKNS_4bboxE(0, 0);
    __ZNK4Math7frustum10clipstatusERKNS_4bboxE(0, 0);
}
f0();
