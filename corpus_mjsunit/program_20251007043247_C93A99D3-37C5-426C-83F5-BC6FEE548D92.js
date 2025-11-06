function t(a1, a2) {
    a1.test(a2);
}
function f(a5, a6) {
    a5.test(a6);
}
t(/\p{Script=Common}+/u, ".");
f(/\p{Script=Common}+/u, "supercalifragilisticexpialidocious");
t(/\p{Script=Han}+/u, "话说天下大势，分久必合，合久必分");
t(/\p{Script=Hani}+/u, "吾庄后有一桃园，花开正盛");
f(/\p{Script=Han}+/u, "おはようございます");
f(/\p{Script=Hani}+/u, "Something is rotten in the state of Denmark");
t(/\p{Script=Latin}+/u, "Wie froh bin ich, daß ich weg bin!");
t(/\p{Script=Latn}+/u, "It was a bright day in April, and the clocks were striking thirteen");
f(/\p{Script=Latin}+/u, "奔腾千里荡尘埃，渡水登山紫雾开");
f(/\p{Script=Latn}+/u, "いただきます");
t(/\p{sc=Hiragana}/u, "いただきます");
t(/\p{sc=Hira}/u, "ありがとうございました");
f(/\p{sc=Hiragana}/u, "Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte");
f(/\p{sc=Hira}/u, "Call me Ishmael");
t(/\p{sc=Phoenician}/u, "𐤀𐤚");
t(/\p{sc=Phnx}/u, "𐤟𐤖");
f(/\p{sc=Phoenician}/u, "Arthur est un perroquet");
f(/\p{sc=Phnx}/u, "设心狠毒非良士，操卓原来一路人");
t(/\p{sc=Grek}/u, "ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον, ὃς μάλα πολλὰ");
t(/\p{sc=Greek}/u, "μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος");
f(/\p{sc=Greek}/u, "高贤未服英雄志，屈节偏生杰士疑");
f(/\p{sc=Greek}/u, "Mr. Jones, of the Manor Farm, had locked the hen-houses for the night");
