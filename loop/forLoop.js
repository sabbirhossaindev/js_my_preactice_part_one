// for er kharta loop variablale,condition,loop variabale change hoha ai 3 kaj
for(var i = 0; i < 10; i++){
    console.log(i);
}

// sob value dackata chaila (var i = 0; i <= 10; i++) aita use kora lagba
for(var i = 0; i <= 10; i++){
    console.log(i);
}

// array ta koya element asa ta dackta .lenght use kora laga[ loop use kora for loop chalay sob value ka alada alada korbo that's it]
var nums = [55, 66, 77, 88, 99, 11, 44];
for(var i = 0; i < nums.length; i++) {
    var element = nums[i];
    console.log(element);  
}
//  for loop kiva kaj kora aita frn diya example
var myFrnd = ['badon', 'hridoy', 'twohed', 'omi', 'hridoy', 'monir']
for (var i = 0; i < myFrnd.length; i++) {
    var element = myFrnd[i];
    console.log(element);
}