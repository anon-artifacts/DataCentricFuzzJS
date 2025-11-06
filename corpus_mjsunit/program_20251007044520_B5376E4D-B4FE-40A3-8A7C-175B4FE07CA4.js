function mutateObjectOnStringConversion(a1) {
    const v2 = () => {
        a1.x = 42;
        return "";
    };
    return { toString: v2 };
}
{
    const re = /./;
    re.exec(mutateObjectOnStringConversion(re));
}
{
    const re = /./;
    re.test(mutateObjectOnStringConversion(re));
}
{
    const re = /./;
    const v16 = mutateObjectOnStringConversion(re);
    re[Symbol.match](v16);
}
{
    const re = /./;
    const v22 = mutateObjectOnStringConversion(re);
    re[Symbol.search](v22);
}
{
    const re = /./;
    const v28 = mutateObjectOnStringConversion(re);
    re[Symbol.split](v28);
}
{
    const re = /./;
    const v34 = mutateObjectOnStringConversion(re);
    re[Symbol.replace](v34);
}
