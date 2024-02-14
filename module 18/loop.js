//const: value will not change
// let:valur can change
// var: we should not use it

// for of---- ar kaj hocce ja ache sob gulo aksate noi ak ak kore asbe

const numbers = [ 11, 12, 13, 15, 44, 67];
 console.log(numbers);
for(const num of numbers){
     console.log(num)
}

const fruits = ['orange', 'banana','mango', 'watermelon'];
/* structure basic

for (){

}
*/

for(const fruit of fruits){
     console.log(fruit);
     console.log('i want to eat')
}


//---------------------------------

const a =7;
if (a <10){
    console.log('paisi');
}

else{
    console.log('paini');
}

//------while loop-----------------

let num = 0;
while(num <=5){
    console.log('loop', num);
    // num= num+1; //3 vbe dawa jai
    // num+=1;
    num++;

}


// -------------range -----------

let numb = 10;
while(numb <20){
    console.log('sss',numb);
    numb++;
}