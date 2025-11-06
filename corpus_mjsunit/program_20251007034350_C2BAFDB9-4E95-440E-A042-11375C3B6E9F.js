let v4;
try { v4 = Atom(""); } catch (e) {}
try { test_mix("\1", no_unicode_flags, v4); } catch (e) {}
let v9;
try { v9 = Atom(""); } catch (e) {}
try { test_mix("\2", no_unicode_flags, v9); } catch (e) {}
let v13;
try { v13 = Atom(""); } catch (e) {}
try { test_mix("\3", no_unicode_flags, v13); } catch (e) {}
let v17;
try { v17 = Atom(""); } catch (e) {}
try { test_mix("\4", no_unicode_flags, v17); } catch (e) {}
let v21;
try { v21 = Atom(""); } catch (e) {}
try { test_mix("\5", no_unicode_flags, v21); } catch (e) {}
let v25;
try { v25 = Atom(""); } catch (e) {}
try { test_mix("\6", no_unicode_flags, v25); } catch (e) {}
let v29;
try { v29 = Atom(""); } catch (e) {}
try { test_mix("\7", no_unicode_flags, v29); } catch (e) {}
let v33;
try { v33 = Atom("8"); } catch (e) {}
try { test_mix("\8", no_unicode_flags, v33); } catch (e) {}
let v37;
try { v37 = Atom("9"); } catch (e) {}
try { test_mix("\9", no_unicode_flags, v37); } catch (e) {}
let v41;
try { v41 = Atom(""); } catch (e) {}
try { test_mix("\10", no_unicode_flags, v41); } catch (e) {}
let v45;
try { v45 = Atom("	"); } catch (e) {}
try { test_mix("\11", no_unicode_flags, v45); } catch (e) {}
let v49;
try { v49 = Atom("89"); } catch (e) {}
try { test_mix("\189", no_unicode_flags, v49); } catch (e) {}
let v53;
try { v53 = Atom("89"); } catch (e) {}
try { test_mix("\1089", no_unicode_flags, v53); } catch (e) {}
let v57;
try { v57 = Atom("A89"); } catch (e) {}
try { test_mix("\10189", no_unicode_flags, v57); } catch (e) {}
let v61;
try { v61 = Atom("A189"); } catch (e) {}
try { test_mix("\101189", no_unicode_flags, v61); } catch (e) {}
let v66;
try { v66 = Empty(); } catch (e) {}
let v68;
try { v68 = Capture(1, v66); } catch (e) {}
let v71;
try { v71 = BackReference(1); } catch (e) {}
const v72 = [v68,v71];
let v74;
try { v74 = Alternative(v72); } catch (e) {}
try { test_mix("()\1", no_unicode_flags, v74); } catch (e) {}
let v79;
try { v79 = Empty(); } catch (e) {}
let v80;
try { v80 = Capture(1, v79); } catch (e) {}
let v82;
try { v82 = BackReference(1); } catch (e) {}
let v85;
try { v85 = Assertion("NOT_IN_SURROGATE_PAIR"); } catch (e) {}
const v86 = [v82,v85];
let v87;
try { v87 = Alternative(v86); } catch (e) {}
const v88 = [v80,v87];
let v89;
try { v89 = Alternative(v88); } catch (e) {}
try { test_mix("()\1", unicode_flags, v89); } catch (e) {}
let v93;
try { v93 = Empty(); } catch (e) {}
let v94;
try { v94 = Capture(1, v93); } catch (e) {}
let v96;
try { v96 = Empty(); } catch (e) {}
let v97;
try { v97 = Capture(2, v96); } catch (e) {}
let v99;
try { v99 = Empty(); } catch (e) {}
let v100;
try { v100 = Capture(3, v99); } catch (e) {}
let v102;
try { v102 = Empty(); } catch (e) {}
let v103;
try { v103 = Capture(4, v102); } catch (e) {}
let v105;
try { v105 = Empty(); } catch (e) {}
let v106;
try { v106 = Capture(5, v105); } catch (e) {}
let v108;
try { v108 = Empty(); } catch (e) {}
let v109;
try { v109 = Capture(6, v108); } catch (e) {}
let v111;
try { v111 = Empty(); } catch (e) {}
let v112;
try { v112 = Capture(7, v111); } catch (e) {}
let v114;
try { v114 = Empty(); } catch (e) {}
let v115;
try { v115 = Capture(8, v114); } catch (e) {}
let v117;
try { v117 = Empty(); } catch (e) {}
let v118;
try { v118 = Capture(9, v117); } catch (e) {}
let v120;
try { v120 = Empty(); } catch (e) {}
let v121;
try { v121 = Capture(10, v120); } catch (e) {}
let v123;
try { v123 = BackReference(10); } catch (e) {}
const v124 = [v94,v97,v100,v103,v106,v109,v112,v115,v118,v121,v123];
let v125;
try { v125 = Alternative(v124); } catch (e) {}
try { test_mix("()()()()()()()()()()\10", no_unicode_flags, v125); } catch (e) {}
let v129;
try { v129 = Empty(); } catch (e) {}
let v130;
try { v130 = Capture(1, v129); } catch (e) {}
let v132;
try { v132 = Empty(); } catch (e) {}
let v133;
try { v133 = Capture(2, v132); } catch (e) {}
let v135;
try { v135 = Empty(); } catch (e) {}
let v136;
try { v136 = Capture(3, v135); } catch (e) {}
let v138;
try { v138 = Empty(); } catch (e) {}
let v139;
try { v139 = Capture(4, v138); } catch (e) {}
let v141;
try { v141 = Empty(); } catch (e) {}
let v142;
try { v142 = Capture(5, v141); } catch (e) {}
let v144;
try { v144 = Empty(); } catch (e) {}
let v145;
try { v145 = Capture(6, v144); } catch (e) {}
let v147;
try { v147 = Empty(); } catch (e) {}
let v148;
try { v148 = Capture(7, v147); } catch (e) {}
let v150;
try { v150 = Empty(); } catch (e) {}
let v151;
try { v151 = Capture(8, v150); } catch (e) {}
let v153;
try { v153 = Empty(); } catch (e) {}
let v154;
try { v154 = Capture(9, v153); } catch (e) {}
let v156;
try { v156 = Empty(); } catch (e) {}
let v157;
try { v157 = Capture(10, v156); } catch (e) {}
let v159;
try { v159 = BackReference(10); } catch (e) {}
let v161;
try { v161 = Assertion("NOT_IN_SURROGATE_PAIR"); } catch (e) {}
const v162 = [v159,v161];
let v163;
try { v163 = Alternative(v162); } catch (e) {}
const v164 = [v130,v133,v136,v139,v142,v145,v148,v151,v154,v157,v163];
let v165;
try { v165 = Alternative(v164); } catch (e) {}
try { test_mix("()()()()()()()()()()\10", unicode_flags, v165); } catch (e) {}
