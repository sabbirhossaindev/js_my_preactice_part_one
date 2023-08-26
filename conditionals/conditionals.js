// if else conditionals math;

var teaPrice = 15;
if(teaPrice < 10){
    console.log("Hmm mama cha dan taratari.");
}
else{
    console.log("atoo dam diya ami cha kabo na.");
}

var teaPrice = 8;
if(teaPrice < 10){
    console.log("Hmm mama cha dan taratari.");
}
else{
    console.log("atoo dam diya ami cha kabo na.");
}

var piziaPrice = 150 ;
if(piziaPrice > 140){
    console.log("Hmm mama amr pizia ta dan.");
}
else{
    console.log("atoo dam diya amar pizia lagbo na.");
}
// use of (</>) lessdan or gaterden simbol.

var otherLove = 5000000;
if(otherLove > 550000){
    console.log("taka thakla ami oo asi no probleme.");
}
else{
    console.log("taka nai too amio nai it's simple.");
}

var otherLove = 5000000;
if(otherLove < 550000){
    console.log("taka thakla ami oo asi no probleme.");
}
else{
    console.log("taka nai too amio nai it's simple.");
}
// == relatade condition.
var picnicChada = 1000 ;
if(picnicChada == 1000){
    console.log("Ami thola oboshi picnic a jabo.");
}
else{
    console.log("Vai ami thola picnic a jabo na.");
}

// !=(Not yeakul) relatade condition.
var picnicChada = 2500 ;
if(picnicChada != 2000){
    console.log("ai amound  hoila khala hoba r kono koth nai.");
}
else{
    console.log("ai amound na hoila khala hoba na desition final.");
}

// akadik condition relatad true/false.

var jobPaiso = true;
var savingAmount = 500000;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else{
    console.log("tor kopala biya nai");
}

var jobPaiso = true;
var savingAmount = 50000;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else{
    console.log("tor biya nai");
}

var jobPaiso = false;
var savingAmount = 50000;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else{
    console.log("kopala biya nai");
}

var jobPaiso = true;
var savingAmount = 500000;
if(jobPaiso == true || savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else{
    console.log("tor kopala biya nai");
}

// if,else if.else relatade losijac.

var jobPaiso = true;
var savingAmount = 50000;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else if(jobPaiso == true){
    console.log("assa dackba koydin por ok");
}
else{
    console.log("tor kopala biya nai");
}

var jobPaiso = true;
var savingAmount = 500000;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else if(jobPaiso == true){
    console.log("assa dackba koydin por ok");
}
else{
    console.log("tor kopala biya nai");
}

var jobPaiso = false;
var savingAmount = 500;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else if(jobPaiso == true){
    console.log("assa dackba koydin por ok");
}
else{
    console.log("tor kopala biya nai");
}
// lotari..
var number = Math.random() * 100;
var result = Math.round(number);
console.log(result);
// 1 real password related.

var pass = 12345;
if(pass == 12345){
    console.log("unlock");
}
else{
    console.log("please Try again");
}
// 2 vul password related.
var pass = 12345;
if(pass == 1234){
    console.log("unlock");
}
else{
    console.log("please Try again");
}