//
function help_tag2id(tag, idx) {

  try {
    tag = tag.toLowerCase();
    if ('base' == tag || 'select' == tag) return null;

    {
      //console.log(`help_tag2id -> querySelector:${tag}`);
      let t2 = document.querySelectorAll(tag);
      if (0 == t2.length) throw (`FAIL: help_tag2id -> querySelectorAll:${tag}`);

      t3 = t2[idx % t2.length]

      return t3;
    }
  } catch (e) {
    let t1 = document.body;
    try {
      t2 = document.getElementById(`id${idx % 512}`);
      t1 = t2 ? t2 : t1
    } catch (e) { }

    let r0 = (() => {
      let t0 = document.createElement(tag);
      if (t0 instanceof HTMLUnknownElement)
        t0 = document.createElementNS("http://www.w3.org/2000/svg", tag);

      t1.appendChild(t0);
      return t0;
    })();

    return r0;
  }
}