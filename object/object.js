// object mona rakta 4 ta jinis mona rakta hoba
var student = {id:100, phone:1719228487, name:"Sabbir"};
var student2 = { id:104, phone:1888559287, name:"Nadim"};

console.log(student);
console.log(student2);

// ****jodi kno student er phoneNo ba property name speacik janta chaila. 3 upay object er cracter strick re/ toiry kora ****
var student = {id:100, phone:1719228487, name:"Sabbir"};
var student2 = { id:104, phone:1888559287, name:"Nadim"};

//  var phoneNo1 = student.phone;[nunber 1 trck]
// var phoneNo2 = student["phone"]; [number 2 trck]
// var phonePropName = "phone";
//  var phoneNo3 = student[phonePropName];[number 3 rick]

var phoneNo = student.phone;
console.log(phoneNo);
console.log(student2);

// phone number readu kora ba/ poriborton kora
var student = {id:100, phone:1719228487, name:"Sabbir"};
var student2 = { id:104, phone:1888559287, name:"Nadim"};
var phoneNo1 = student.phone;
// var phoneNo2 = student["phone"];
// var phonePropName = "phone";
// var phoneNo3 = student[phonePropName];
// update phone number:
student2.phone = 16182246;
student2["phone"] =333888;
student2.chinama = "Ogni2";
// student2["chinama"] = "Smart boy";

console.log(phoneNo1);
console.log(student2);