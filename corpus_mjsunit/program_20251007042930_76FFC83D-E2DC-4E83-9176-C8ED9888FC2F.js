function shouldBe(a1, a2) {
}
function shouldBeNaN(a4) {
}
{
    let dateValue = Date.parse("275760-09-13T00:00:00.000Z");
    shouldBe(dateValue, 8640000000000000);
    const v11 = new Date(dateValue);
    let date = v11;
    shouldBe(date.getUTCFullYear(), 275760);
    shouldBe(date.getUTCMonth(), 8);
    shouldBe(date.getUTCDate(), 13);
    shouldBe(date.getUTCHours(), 0);
    shouldBe(date.getUTCMinutes(), 0);
    shouldBe(date.getUTCSeconds(), 0);
    shouldBe(date.getUTCMilliseconds(), 0);
}
{
    let dateValue = Date.UTC(275760, 8, 13, 0, 0, 0, 0);
    shouldBe(dateValue, 8640000000000000);
    const v46 = new Date(dateValue);
    let date = v46;
    shouldBe(date.getUTCFullYear(), 275760);
    shouldBe(date.getUTCMonth(), 8);
    shouldBe(date.getUTCDate(), 13);
    shouldBe(date.getUTCHours(), 0);
    shouldBe(date.getUTCMinutes(), 0);
    shouldBe(date.getUTCSeconds(), 0);
    shouldBe(date.getUTCMilliseconds(), 0);
}
{
    let dateValue = Date.parse("275760-09-12T23:59:59.999Z");
    shouldBe(dateValue, 8639999999999999);
    const v75 = new Date(dateValue);
    let date = v75;
    shouldBe(date.getUTCFullYear(), 275760);
    shouldBe(date.getUTCMonth(), 8);
    shouldBe(date.getUTCDate(), 12);
    shouldBe(date.getUTCHours(), 23);
    shouldBe(date.getUTCMinutes(), 59);
    shouldBe(date.getUTCSeconds(), 59);
    shouldBe(date.getUTCMilliseconds(), 999);
}
{
    let dateValue = Date.UTC(275760, 8, 12, 23, 59, 59, 999);
    shouldBe(dateValue, 8639999999999999);
    const v110 = new Date(dateValue);
    let date = v110;
    shouldBe(date.getUTCFullYear(), 275760);
    shouldBe(date.getUTCMonth(), 8);
    shouldBe(date.getUTCDate(), 12);
    shouldBe(date.getUTCHours(), 23);
    shouldBe(date.getUTCMinutes(), 59);
    shouldBe(date.getUTCSeconds(), 59);
    shouldBe(date.getUTCMilliseconds(), 999);
}
{
    let dateValue = Date.parse("275760-09-13T00:00:00.001Z");
    shouldBeNaN(dateValue);
}
{
    let dateValue = Date.UTC(275760, 8, 13, 0, 0, 0, 1);
    shouldBeNaN(dateValue);
}
{
    let dateValue = Date.parse("-271821-04-20T00:00:00.000Z");
    shouldBe(dateValue, -8640000000000000);
    const v156 = new Date(dateValue);
    let date = v156;
    shouldBe(date.getUTCFullYear(), -271821);
    shouldBe(date.getUTCMonth(), 3);
    shouldBe(date.getUTCDate(), 20);
    shouldBe(date.getUTCHours(), 0);
    shouldBe(date.getUTCMinutes(), 0);
    shouldBe(date.getUTCSeconds(), 0);
    shouldBe(date.getUTCMilliseconds(), 0);
}
{
    let dateValue = Date.UTC(-271821, 3, 20, 0, 0, 0, 0);
    shouldBe(dateValue, -8640000000000000);
    const v194 = new Date(dateValue);
    let date = v194;
    shouldBe(date.getUTCFullYear(), -271821);
    shouldBe(date.getUTCMonth(), 3);
    shouldBe(date.getUTCDate(), 20);
    shouldBe(date.getUTCHours(), 0);
    shouldBe(date.getUTCMinutes(), 0);
    shouldBe(date.getUTCSeconds(), 0);
    shouldBe(date.getUTCMilliseconds(), 0);
}
{
    let dateValue = Date.parse("-271821-04-20T00:00:00.001Z");
    shouldBe(dateValue, -8639999999999999);
    const v225 = new Date(dateValue);
    let date = v225;
    shouldBe(date.getUTCFullYear(), -271821);
    shouldBe(date.getUTCMonth(), 3);
    shouldBe(date.getUTCDate(), 20);
    shouldBe(date.getUTCHours(), 0);
    shouldBe(date.getUTCMinutes(), 0);
    shouldBe(date.getUTCSeconds(), 0);
    shouldBe(date.getUTCMilliseconds(), 1);
}
{
    let dateValue = Date.UTC(-271821, 3, 20, 0, 0, 0, 1);
    shouldBe(dateValue, -8639999999999999);
    const v263 = new Date(dateValue);
    let date = v263;
    shouldBe(date.getUTCFullYear(), -271821);
    shouldBe(date.getUTCMonth(), 3);
    shouldBe(date.getUTCDate(), 20);
    shouldBe(date.getUTCHours(), 0);
    shouldBe(date.getUTCMinutes(), 0);
    shouldBe(date.getUTCSeconds(), 0);
    shouldBe(date.getUTCMilliseconds(), 1);
}
{
    let dateValue = Date.parse("-271821-04-19T23:59:59.999Z");
    shouldBeNaN(dateValue);
}
{
    let dateValue = Date.UTC(-271821, 3, 19, 23, 59, 59, 999);
    shouldBeNaN(dateValue);
}
