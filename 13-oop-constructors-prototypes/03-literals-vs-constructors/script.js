const dict = Object.create(null);
dict.key = 'value';

console.log(dict); // 输出: { key: 'value' }
console.log(dict.toString); // undefined，因为没有继承 Object.prototype
