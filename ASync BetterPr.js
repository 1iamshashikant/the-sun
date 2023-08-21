//promises are Asynchronus 
//Promeises may be fulfilled and there is chance of getting rejected.
 /* 
async function dadmakespromise(){
    const dadpromise = await new Promise((resolve,reject) => {
      setTimeout(() => {
       salaryCredited=true;
       salary=100000;
       costofps5=40000;
       costofps4=30000;
      if(salaryCredited===true && salary>costofps5){
        resolve('Buy Him PS5');
      }else if(salaryCredited===true && salary>costofps4){
        resolve('Buy Him PS4');
      }else{
        reject('Sorry Son I will take in next Month');
      }
     
    },1000);
   
  
  });
  console.log(dadpromise);

  }
  dadmakespromise();

  */
  async function dadmakespromise(){
try{
  
  const dadpromise = await new Promise((resolve,reject) => {
    setTimeout(() => {
     salaryCredited=true;
     salary=20000;
     costofps5=40000;
     costofps4=30000;
    if(salaryCredited===true && salary>costofps5){
      resolve('Buy Him PS5');
    }else if(salaryCredited===true && salary>costofps4){
      reject('Buy Him PS4');
    }else{
      reject('Sorry Son I will take in next Month');
    }
   
  },1000);
 

});
console.log(dadpromise);


}
catch(err){
  console.log(err);

}

  }
  dadmakespromise();



