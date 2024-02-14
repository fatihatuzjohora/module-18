
for(i=0; i<=200;i++){
    console.log(`num ${i}:`, i)
    if(i>=100){
        break
    }
}
 console.log( 'num:',i);
 

let j=1;
while (j<=150) {
    if(j>=100){
        break
    }
    j++;
}
console.log(j);

//--------

for (let i = 1; i <= 100; i++) {
    const root = Math.sqrt(i);
    const rootString = root.toString();
    console.log(rootString);
    if (root > 1 && !rootString.includes(".")) {
      console.log(i);
      break;
    }
  }
