const today =  new Date();

const chrism = new Date(today.getFullYear(),11,25);

if (today.getMonth() == 11 && today.getDate() > 25 ){
    chrism.setFullYear(chrism.getFullYear()+1);
}

const oneday=1000*60*60*24;

const diff = Math.ceil((chrism.getTime()-today.getTime())/ (oneday));

console.log(`${diff} days left before next christmas`);
