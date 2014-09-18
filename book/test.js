var mod = require('./mymod.js');
var mod_module = require('./mymodmodule.js');
var reverse = require('./reverse.js');

console.log('-----------------> Module');
console.log(mod.name);
console.log(mod.lower('APPLE'));
console.log(mod.upper('mango'));
console.log(mod.get_name());

console.log('-----------------> exports.Module');

console.log(mod_module.get_name());
console.log(mod_module.lower('APPLE'));
console.log(mod_module.upper('mango'));
console.log(mod_module.get_name());

console.log('-----------------> Reverse');
console.log(reverse('teste'));
