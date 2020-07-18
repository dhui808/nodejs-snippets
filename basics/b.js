var foo = require('./a.js');
console.log('In b.js, foo is: '+ foo);
console.log("object.keys of foo: "+Object.keys(foo));
console.log('foo.name1:'+ foo.name1);
console.log('foo.age:'+ foo.age);
console.log('foo.name:'+ foo.name);
foo();
foo.f2();
