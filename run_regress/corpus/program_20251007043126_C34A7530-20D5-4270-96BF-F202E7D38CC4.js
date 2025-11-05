var ev = eval;
const t1 = ev((((((((((((("'use strict';" + "function actX(action)") + "{") + "  switch (action)") + "  {") + "    case 'get':") + "    case 'set1':") + "      return;") + "    case 'delete':") + "      try { return eval('delete x'); }") + "      catch (e) { return e.name; }") + "  }") + "}") + "actX;");
t1("delete");
const t2 = ev(((((((((((((("'use strict';" + "var y = 5;") + "function actY(action)") + "{") + "  switch (action)") + "  {") + "    case 'get':") + "      return y;") + "    case 'set2':") + "      y = 71;") + "      try { return eval('delete y'); }") + "      catch (e) { return e.name; }") + "  }") + "}") + "actY;");
t2();
