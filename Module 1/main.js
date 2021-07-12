const radixTransformer = require('./radixTransformer');

transformer = new radixTransformer();

console.log(`${4.12}的二进制格式为：` + transformer.decimal2binary(4.12));

console.log(`${123321.12}的64进制格式为：` + transformer.encode64(123321.12));
