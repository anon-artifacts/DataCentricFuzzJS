const stacks = [];
for (let i3 = 0; i3 < 10; i3++) {
    let v10;
    try { v10 = saveStack(); } catch (e) {}
    try { stacks.push(v10); } catch (e) {}
}
let v12;
try { v12 = stacks.pop(); } catch (e) {}
const s = v12;
for (const v14 of stacks) {
}
