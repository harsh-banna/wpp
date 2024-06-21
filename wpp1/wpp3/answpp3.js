const minnum = 1;
const maxnum = 10;
const compAnswer = Math.floor(Math.random()*10);

const yourAnswer = prompt('guess a number between 1 and 10');

if (yourAnswer == compAnswer){
    console.log(`you won number matched ${yourAnswer} = ${compAnswer} `)
}else{
    console.log(`you lost number does not match  the computer number is ${compAnswer}`)
};
