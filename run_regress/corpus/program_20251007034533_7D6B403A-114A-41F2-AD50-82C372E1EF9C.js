const v1 = Number?.MIN_VALUE;
var o = { length: v1 };
const v6 = Array?.prototype?.toString;
let v7;
try { v7 = v6.call(o); } catch (e) {}
var result = v7;
const v10 = Number?.MIN_VALUE;
var o = { length: v10 };
const v14 = Array?.prototype?.toLocaleString;
let v15;
try { v15 = v14.call(o); } catch (e) {}
var result = v15;
const v18 = Number?.MIN_VALUE;
var o = { length: v18 };
const v22 = Array?.prototype?.join;
let v23;
try { v23 = v22.call(o); } catch (e) {}
var result = v23;
result?.length;
const v27 = Number?.MIN_VALUE;
var o = { length: v27 };
const v32 = Array?.prototype?.push;
try { v32.call(o, 1); } catch (e) {}
o?.length;
o?.[0];
const v38 = Number?.MAX_VALUE;
var o = { length: v38 };
const v41 = () => {
    const v44 = Array?.prototype?.push;
    let v45;
    try { v45 = v44.call(o, 1); } catch (e) {}
    return v45;
};
try { v41(); } catch (e) {}
var o = { length: 0 };
const v52 = Array?.prototype?.pop;
try { v52.call(o); } catch (e) {}
o?.length;
const v56 = Number?.MIN_VALUE;
var o = { length: v56 };
const v60 = Array?.prototype?.pop;
try { v60.call(o); } catch (e) {}
o?.length;
const v64 = Number?.MAX_VALUE;
var o = { length: v64 };
const v68 = Array?.prototype?.pop;
try { v68.call(o); } catch (e) {}
o?.length;
Number?.MAX_SAFE_INTEGER - 1;
const v75 = Number?.MIN_VALUE;
var o = { 0: "foo", length: v75 };
const v79 = Array?.prototype?.reverse;
let v80;
try { v80 = v79.call(o); } catch (e) {}
var result = v80;
typeof result;
Number?.MIN_VALUE;
result?.length;
Number?.MIN_VALUE;
o?.length;
const v89 = Number?.MIN_VALUE;
var o = { 0: "foo", length: v89 };
const v93 = Array?.prototype?.shift;
let v94;
try { v94 = v93.call(o); } catch (e) {}
var result = v94;
o?.length;
var o = { length: 0 };
const v103 = Array?.prototype?.unshift;
try { v103.call(o); } catch (e) {}
o?.length;
var o = { length: 0 };
const v112 = Array?.prototype?.unshift;
try { v112.call(o, "foo"); } catch (e) {}
o?.[0];
o?.length;
const v118 = Number?.MIN_VALUE;
var o = { length: v118 };
const v122 = Array?.prototype?.unshift;
try { v122.call(o); } catch (e) {}
o?.length;
const v126 = Number?.MIN_VALUE;
var o = { length: v126 };
const v131 = Array?.prototype?.unshift;
try { v131.call(o, "foo"); } catch (e) {}
o?.[0];
o?.length;
const v137 = Number?.MIN_VALUE;
var o = { length: v137 };
const v141 = Array?.prototype?.splice;
try { v141.call(o); } catch (e) {}
o?.length;
const v145 = Number?.MIN_VALUE;
var o = { length: v145 };
const v151 = ["foo"];
const v153 = Array?.prototype?.splice;
try { v153.call(o, 0, 10, v151); } catch (e) {}
["foo"];
o?.[0];
o?.length;
const v160 = Number?.MIN_VALUE;
var o = { length: v160 };
const v164 = -1;
const v166 = Array?.prototype?.splice;
try { v166.call(o, v164); } catch (e) {}
o?.length;
const v170 = Number?.MAX_SAFE_INTEGER;
var o = { length: v170 };
const v174 = -1;
const v176 = Array?.prototype?.splice;
try { v176.call(o, v174); } catch (e) {}
Number?.MAX_SAFE_INTEGER - 1;
o?.length;
const v182 = Number?.MIN_VALUE;
var o = { length: v182 };
const v186 = Array?.prototype?.slice;
let v187;
try { v187 = v186.call(o); } catch (e) {}
var result = v187;
result?.length;
const v191 = Number?.MIN_VALUE;
var o = { length: v191 };
const v194 = Number?.MAX_VALUE;
const v196 = Array?.prototype?.slice;
let v197;
try { v197 = v196.call(o, v194); } catch (e) {}
var result = v197;
result?.length;
const v201 = Number?.MAX_VALUE;
var o = { length: v201 };
const v206 = Number?.MAX_VALUE - 1;
const v208 = Array?.prototype?.slice;
let v209;
try { v209 = v208.call(o, v206); } catch (e) {}
var result = v209;
result?.length;
const v213 = Number?.MIN_VALUE;
var o = { length: v213 };
const v217 = Array?.prototype?.indexOf;
let v218;
try { v218 = v217.call(o); } catch (e) {}
var result = v218;
-1;
const v222 = Number?.MAX_SAFE_INTEGER;
var o = { length: v222 };
o[Number?.MAX_SAFE_INTEGER - 1] = "foo";
const v232 = Number?.MAX_SAFE_INTEGER - 2;
const v234 = Array?.prototype?.indexOf;
let v235;
try { v235 = v234.call(o, "foo", v232); } catch (e) {}
var result = v235;
Number?.MAX_SAFE_INTEGER - 1;
const v240 = Number?.MAX_SAFE_INTEGER;
var o = { length: v240 };
o[Number?.MAX_SAFE_INTEGER - 1] = "foo";
const v249 = -1;
const v251 = Array?.prototype?.indexOf;
let v252;
try { v252 = v251.call(o, "foo", v249); } catch (e) {}
var result = v252;
Number?.MAX_SAFE_INTEGER - 1;
const v257 = Number?.MIN_VALUE;
var o = { length: v257 };
const v261 = Array?.prototype?.lastIndexOf;
let v262;
try { v262 = v261.call(o); } catch (e) {}
var result = v262;
-1;
const v266 = Number?.MAX_SAFE_INTEGER;
var o = { length: v266 };
o[Number?.MAX_SAFE_INTEGER - 1] = "foo";
const v274 = Number?.MAX_SAFE_INTEGER;
const v276 = Array?.prototype?.lastIndexOf;
let v277;
try { v277 = v276.call(o, "foo", v274); } catch (e) {}
var result = v277;
Number?.MAX_SAFE_INTEGER - 1;
const v282 = Number?.MAX_SAFE_INTEGER;
var o = { length: v282 };
o[Number?.MAX_SAFE_INTEGER - 1] = "foo";
const v291 = -1;
const v293 = Array?.prototype?.lastIndexOf;
let v294;
try { v294 = v293.call(o, "foo", v291); } catch (e) {}
var result = v294;
Number?.MAX_SAFE_INTEGER - 1;
function f299(a300) {
    return a300;
}
var func = f299;
const v302 = Number?.MIN_VALUE;
var o = { length: v302 };
const v306 = Array?.prototype?.filter;
try { v306.call(o, func); } catch (e) {}
Number?.MIN_VALUE;
o?.length;
const v310 = Number?.MIN_VALUE;
var o = { length: v310 };
const v314 = Array?.prototype?.forEach;
try { v314.call(o, func); } catch (e) {}
Number?.MIN_VALUE;
o?.length;
const v318 = Number?.MIN_VALUE;
var o = { length: v318 };
const v322 = Array?.prototype?.some;
try { v322.call(o, func); } catch (e) {}
Number?.MIN_VALUE;
o?.length;
const v326 = Number?.MIN_VALUE;
var o = { length: v326 };
const v330 = Array?.prototype?.every;
try { v330.call(o, func); } catch (e) {}
Number?.MIN_VALUE;
o?.length;
const v334 = Number?.MIN_VALUE;
var o = { length: v334 };
const v338 = Array?.prototype?.map;
try { v338.call(o, func); } catch (e) {}
Number?.MIN_VALUE;
o?.length;
const v342 = Number?.MIN_VALUE;
var o = { length: v342 };
const v347 = Array?.prototype?.reduce;
try { v347.call(o, func, 0); } catch (e) {}
Number?.MIN_VALUE;
o?.length;
const v351 = Number?.MIN_VALUE;
var o = { length: v351 };
const v356 = Array?.prototype?.reduceRight;
try { v356.call(o, func, 0); } catch (e) {}
Number?.MIN_VALUE;
o?.length;
const v360 = Number?.MIN_VALUE;
var o = { length: v360 };
const v364 = Array?.prototype;
try { v364.fill(o, 0); } catch (e) {}
Number?.MIN_VALUE;
o?.length;
