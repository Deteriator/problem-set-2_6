// Question 1
const log = (data) => {
  for(let i in data) {
    console.log(`${i}: ${data[i]}`) ;
}
};
// Question 2
const totalProps = (data) => {
    let x = Object.keys(data);
    console.log(x.length);
}

// Question 3
const listBooks = (data) => {
  let array = data;
  for(let i = 0; i < array.length; i++){
    console.log(`${array[i].title} was written by ${array[i].author}`);
  }
};

// Question 4
 const repeatedCharacters = (data) => { 
   data = data.split("");
   let repeated= new Object();
     for(let i = 0; i < data.length; i++){
        if(repeated.hasOwnProperty(data[i])){
          repeated[`${data[i]}`] += 1;
        }
        else{
          repeated[`${data[i]}`] = 1;
        }
     }
     for(let i = 0; i < data.length; i++){
       if(repeated[`${data[i]}`] < 2){
         delete repeated[`${data[i]}`];
       }
     }
     console.log(repeated);
}; 
// Don't write below this line
module.exports = {
  totalProps,
  repeatedCharacters,
}