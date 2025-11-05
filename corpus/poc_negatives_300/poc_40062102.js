// crash.js
function main() {
function workerCode() {
console.profile();
d8.profiler.triggerSample();
}
for(let workerCount = 0; ; ++workerCount) {
let workers = [];
for(let i = 0; i < workerCount; ++i) {
workers[i] = new Worker(workerCode, { type: 'function' });
}
for(let i = 0; i < workerCount; ++i) {
workers[i].terminate();
}
}
}
main();