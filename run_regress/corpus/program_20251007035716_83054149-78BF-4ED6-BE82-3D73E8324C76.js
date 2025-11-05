const v1 = () => {
    return true;
};
RegExp.prototype.__defineGetter__("global", v1);
/()/.toString();
