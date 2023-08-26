// Array/list,claction for example
// array position/index number start 0
// use the js build-in method
// push();
// pop();
// length();
// shift();
// unshift();
// random();
var familyMemberAge = [1, 2, 15, 18, 33, 30, 60, 66];
console.log(familyMemberAge[3]);

// array miya elament raka lagla 

var familyMemberAge = [1, 2, 15, 18, 33, 30, 60, 66];
var nadimAge = familyMemberAge[2];
console.log(nadimAge);

// array miya elament set kora
var familyMemberAge = [1, 2, 15, 18, 30, 34, 60, 66];
familyMemberAge[6] = 63;
console.log(familyMemberAge);

// position number khuja bar korta aita use korta hoba
var familyMemberAge = [1, 2, 15, 18, 30, 34, 60, 66];
var position = familyMemberAge.indexOf(66);
console.log(position);

// new member add use of "push"
var familyMemberAge = [1, 2, 15, 18, 30, 34, 60, 66]
familyMemberAge[6] = 63;
familyMemberAge.push(40);
console.log(familyMemberAge);

// more add 
var familyMemberAge = [1, 2, 15, 18, 30, 34, 60, 66]
familyMemberAge[6] = 63;
console.log(familyMemberAge);
familyMemberAge.push(40);
familyMemberAge.push(4);
familyMemberAge.push(46);
console.log(familyMemberAge);

// aga koto jon silo akon koto jon hoilo ta dackta [console.log(familyMemberAge.length);]
var familyMemberAge = [1, 2, 15, 18, 30, 34, 60, 66]
familyMemberAge[6] = 63; // array position 6 and age 63
console.log(familyMemberAge.length);
familyMemberAge.push(40);
familyMemberAge.push(4);
familyMemberAge.push(46);
console.log(familyMemberAge.length);

// kaw get-out kore dita .pop() use kora laga
var familyMemberAge = [1, 2, 15, 18, 30, 34, 60, 66]
familyMemberAge[6] = 63;
console.log(familyMemberAge.length);
familyMemberAge.push(40);
familyMemberAge.push(4);
familyMemberAge.push(46);
console.log(familyMemberAge.length); // length 11 
familyMemberAge.pop();
console.log(familyMemberAge); //[1, 2, 15, 18, 30, 34, 63, 66, 40, 4]

// array adding for push() & getout for pop(); proses that it's
var brotherLine = ["sabbir", "nadim", "azmin", "nihion",];
brotherLine.push("sujon");
console.log(brotherLine);
brotherLine.pop();
console.log(brotherLine); // ['sabbir', 'nadim', 'azmin', 'nihion']

// first member remuve korta .shift using [ brotherLine.shift(); ]
var brotherLine = ["sabbir", "nadim", "azmin", "nihion",];
brotherLine.push("sujon");
console.log(brotherLine);
brotherLine.pop();
brotherLine.shift();
console.log(brotherLine);

// first member added .unshift using [ brotherLine.unshift("arsh", "yesh",);]
var brotherLine = ["sabbir", "nadim", "azmin", "nihion",];
brotherLine.push("sujon");
console.log(brotherLine);
brotherLine.pop();
brotherLine.unshift("arsh", "yesh",);
console.log(brotherLine); // ['arsh', 'yesh', 'sabbir', 'nadim', 'azmin', 'nihion']

// just .slice(); using 
var brotherLine = ["sabbir", "nadim", "azmin", "nihion", "arsh", "yeash", "shujon",];
var line = brotherLine.slice(2);
console.log(line);

// more .slice(2, 5);
var brotherLine = ["sabbir", "nadim", "azmin", "nihion", "arsh", "yeash", "shujon",];
var line = brotherLine.slice(2, 5);
console.log(line); //['azmin', 'nihion', 'arsh']

// mul array ta okkoto thka ba [pukur thaka pani nayoa er moto].
var brotherLine = ["sabbir", "nadim", "azmin", "nihion", "arsh", "yeash", "shujon",];
var line = brotherLine.slice(2, 5);
console.log(line); //['azmin', 'nihion', 'arsh']
console.log(brotherLine);  // all array sow hobe.

// just chill; using random();
var number = Math.random() * 100;
var result = Math.round(number);
console.log(result);