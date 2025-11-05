function shouldBe(a1, a2) {
}
{
    const v5 = new Date("May 8");
    let date = v5;
    shouldBe(date.getFullYear(), 2000);
    shouldBe(date.getMonth(), 4);
    shouldBe(date.getDate(), 8);
}
{
    const v18 = new Date("Feb 29");
    let date = v18;
    shouldBe(date.getFullYear(), 2000);
    shouldBe(date.getMonth(), 1);
    shouldBe(date.getDate(), 29);
}
{
    const v31 = new Date(" May 8 ");
    let date = v31;
    shouldBe(date.getFullYear(), 2000);
    shouldBe(date.getMonth(), 4);
    shouldBe(date.getDate(), 8);
}
{
    const v44 = new Date(" Feb 29 ");
    let date = v44;
    shouldBe(date.getFullYear(), 2000);
    shouldBe(date.getMonth(), 1);
    shouldBe(date.getDate(), 29);
}
{
    const v57 = new Date("May/8");
    let date = v57;
    shouldBe(date.getFullYear(), 2000);
    shouldBe(date.getMonth(), 4);
    shouldBe(date.getDate(), 8);
}
{
    const v70 = new Date("Feb/29");
    let date = v70;
    shouldBe(date.getFullYear(), 2000);
    shouldBe(date.getMonth(), 1);
    shouldBe(date.getDate(), 29);
}
{
    const v83 = new Date("May8");
    let date = v83;
    shouldBe(date.getFullYear(), 2000);
    shouldBe(date.getMonth(), 4);
    shouldBe(date.getDate(), 8);
}
{
    const v96 = new Date("Feb29");
    let date = v96;
    shouldBe(date.getFullYear(), 2000);
    shouldBe(date.getMonth(), 1);
    shouldBe(date.getDate(), 29);
}
{
    const v109 = new Date("May 8 -1");
    let date = v109;
    shouldBe(date.getFullYear(), -1);
    shouldBe(date.getMonth(), 4);
    shouldBe(date.getDate(), 8);
}
