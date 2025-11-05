// Test 3: Trigger the bug with a OOB access (which is currently mitigated by a SIGTRAP)
let z = 0;
for (var var_1_ = 0; var_1_ < 20; var_1_++) {
var var_2_ = Math.min(-0,-0); // Math.min() call was added
var var_3_ = [];
for (var var_4_ = 0; var_4_ < 1000; var_4_++) {
z = var_4_ * var_2_;
var_3_[z] = var_4_; // Will SIGRAP
}
}
print(z)