

const names = ['Lisa', 'Kaitlin', 'Jan']

const what = 'surprise'

function writeCards(names, what) {
    const newArr = [];
 
  for (let i =0; i < names.length; i++) {  
       newArr.push(`Thank you, ${names[i]}, for the wonderful ${what} gift!`);
       debugger;
   }
    return newArr;
    
}
writeCards(names, what);


function countDown(i) {
while (i>=0) {
    console.log (i);
    i--;
}
}
countDown(i);