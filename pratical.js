// 1 //

let n = 5;
let string = "";
let count = 0;
for (let i = 1; i <= n; i++) {
  
  for (let j = 0;  j < n - i ; j++) {
    string += " ";
  }
  for (let k = 0; k < 1  * i - 1 ; k++) {
     string += " ";
    string += String.fromCharCode(count + 65)+ (i-1);
    string += " ";
    count++;
  }
  
  string += "\n";
  
}
console.log(string);




// 2 //

var o = { 
    foo:"bar",
    arr:[1,2,3],
    subo: {
        foo2:"bar2"
    }
};

function process(key,value) {
    console.log(key + " : "+value);
}

function traverse(o,func) {
    for (var i in o) {
        func.apply(this,[i,o[i]]);  
        if (o[i] !== null && typeof(o[i])=="object") {
            
            traverse(o[i],func);
        }
    }
}

traverse(o,process);





   // 3 //

   var person = {
    name:"coruscate",
         address:{
       line1:"surat", pincode:395006
       },
        members:[{
    name:"mem1"
        }]
        }



    var result = {
    name:typeof person.name,
     address:{
    line1:typeof person.address.line1, pincode:typeof person.address.pincode
    },
    members:[{
    name:typeof person.members[0].name
    }]
 }
        
  console.log(result);