const { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } = require('constants');
const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL

console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Host name
console.log(myUrl.hostname);

//path Name
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// search params
console.log(myUrl.searchParams);

//Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name)=> console.log(`${name}: ${value}`));