try {
    var log = [];
    var logger = {};
    const v6 = new Proxy({}, logger);
    var handler = v6;
    function f8(a9, a10, a11) {
        function f12() {
            log.push([a10,...arguments]);
            let v18;
            try { v18 = Reflect[a10](...arguments); } catch (e) {}
            return v18;
        }
        return f12;
    }
    logger.get = f8;
    function f19(a20, a21, a22) {
        'use strict';
        return this;
    }
    var target = f19;
    const v25 = new Proxy(target, handler);
    var proxy = v25;
    var this_value = Symbol();
    log.length = 0;
    result = Function.prototype.bind.call(proxy, this_value, "foo");
    result.length;
    target.__proto__;
    result.__proto__;
    result();
    log.length;
    for (const v45 in log) {
        log[log][1];
    }
    ["getPrototypeOf",target];
    log[0];
    ["getOwnPropertyDescriptor",target,"length"];
    log[1];
    ["get",target,"length",proxy];
    log[2];
    ["get",target,"name",proxy];
    log[3];
    ["apply",target,this_value,["foo"]];
    log[4];
    new target();
    new result();
    log.length = 0;
    target.__proto__ = { radio: "gaga" };
    result = Function.prototype.bind.call(proxy, this_value, "foo");
    result.length;
    target.__proto__;
    result.__proto__;
    result();
    log.length;
    for (const v84 in log) {
        log[log][1];
    }
    ["getPrototypeOf",target];
    log[0];
    ["getOwnPropertyDescriptor",target,"length"];
    log[1];
    ["get",target,"length",proxy];
    log[2];
    ["get",target,"name",proxy];
    log[3];
    ["apply",target,this_value,["foo"]];
    log[4];
    const v112 = {
        get() {
            return 42;
        },
        getOwnPropertyDescriptor() {
            return { configurable: true };
        },
    };
    handler = v112;
    const v113 = new Proxy(target, handler);
    proxy = v113;
    result = Function.prototype.bind.call(proxy, this_value, "foo");
    result.length;
    result();
    const v129 = {
        get() {
            return Math.pow(2, 100);
        },
        getOwnPropertyDescriptor() {
            return { configurable: true };
        },
    };
    handler = v129;
    const v130 = new Proxy(target, handler);
    proxy = v130;
    result = Function.prototype.bind.call(proxy, this_value, "foo");
    Math.pow(2, 100) - 1;
    result.length;
    result();
    const v150 = {
        get() {
            return 1 / 0;
        },
        getOwnPropertyDescriptor() {
            return { configurable: true };
        },
    };
    handler = v150;
    const v151 = new Proxy(target, handler);
    proxy = v151;
    result = Function.prototype.bind.call(proxy, this_value, "foo");
    1 / 0;
    result.length;
    result();
    const v166 = {
        get() {
            return 4.2;
        },
        getOwnPropertyDescriptor() {
            return { configurable: true };
        },
    };
    handler = v166;
    const v167 = new Proxy(target, handler);
    proxy = v167;
    result = Function.prototype.bind.call(proxy, this_value, "foo");
    result.length;
    result();
    const v179 = {
        get() {
        },
        getOwnPropertyDescriptor() {
            return { configurable: true };
        },
    };
    handler = v179;
    const v180 = new Proxy(target, handler);
    proxy = v180;
    result = Function.prototype.bind.call(proxy, this_value, "foo");
    result.length;
    result();
    const v188 = () => {
        const v189 = {};
        const v191 = new Proxy(v189, {});
        const v193 = Function.prototype.bind;
        let v194;
        try { v194 = v193.call(v191); } catch (e) {}
        return v194;
    };
    v188();
    const v197 = () => {
        const v198 = [];
        const v200 = new Proxy(v198, {});
        const v202 = Function.prototype.bind;
        let v203;
        try { v203 = v202.call(v200); } catch (e) {}
        return v203;
    };
    v197();
    const v205 = () => {
        return 42;
    };
    result = Function.prototype.bind.call(v205, this_value, "foo");
    result();
    const v213 = () => {
        let v214;
        try { v214 = new result(); } catch (e) {}
        return v214;
    };
    v213();
} catch(e216) {
}
