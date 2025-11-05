`for(const { method() {} } = this) {}`;
`var { method() {} } = this;`;
`for(const { *method() {} } = this) {}`;
`var { *method() {} } = this;`;
`for(var { get foo() {} } = this) {}`;
`for(var { set foo() {} } = this) {}`;
for (const v9 in { a: 1 }) {
    break;
}
