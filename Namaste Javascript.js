//Promises are asynchronous
//Promise may be fulfilled and may not be fullfilled

console.log('Person 1: Showes Ticket');
console.log('Person 2: Showes Ticket');

/*
const preMovie =async () =>{
    const PromiseWifeBringingTicket = new Promise((resolve,reject) => {
        setTimeout(()=>{
            reject('Ticket');
        },3000)
    });
*/
    const preMovie =async () =>{
        const PromiseWifeBringingTicket = new Promise((resolve,reject) => {
            setTimeout(()=>{
                reject('Ticket');
            },3000)
        });





    /*
    let Ticket;
    try{
         Ticket =await PromiseWifeBringingTicket;
    }catch(e){
         Ticket ='Sad Face';
    }

    */
/*
    const Getpopcorn =new Promise((resolve,reject) => resolve('popcorn'));
    const Getcandy =new Promise((resolve,reject) => resolve('candy'));
    const Getcoke =new Promise((resolve,reject) => resolve('coke'));


    let Ticket =await PromiseWifeBringingTicket;
    

    let [popcorn,candy,coke ] = await Promise.all([Getpopcorn,Getcandy,Getcoke]);
    console.log('popcorn,candy,coke')
    */



/*
   const Getpopcorn =new Promise((resolve,reject) => resolve('popcorn'));
    const GetButter = new Promise((resolve,reject) => resolve('butter'));
    let Ticket =await PromiseWifeBringingTicket;
    

        console.log('wife :i have the'+' '+Ticket);
        console.log('husband:we should go in');
        console.log('wife: no i am hungry');
       
        let popcorn = await Getpopcorn ;

        console.log('husband:i got some'+' '+popcorn);
        console.log('husband:we should go in');
        console.log('wife: I need butter on popcorn');

        let butter= await GetButter;

        console.log('husband:i got some'+' '+butter+'on popcorn');
        console.log('husband:anything else darling?');
        console.log('wife:lets go we are getting late'); 
        console.log('husband:Thank you for the reminder *grins*');
        */
    


        return Ticket;
}
preMovie().then((msg) => console.log('person3: Showes'+' '+msg));

/* const PromiseWifeBringingTicket = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve('Ticket');
    },3000)
});
const getpopcorn=PromiseWifeBringingTicket.then((t) =>{
    console.log('wife :i have the tickets');
    console.log('husband:we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject) => resolve(t+' '+'popcorn'));
});
const getButter = getpopcorn.then((t)=> { 
    console.log('husband:i got some popcorn');
    console.log('husband:we should go in');
     console.log('wife: I need butter on popcorn');
     return new Promise((resolve,reject) => resolve(t+' '+'butter'));
});

getButter.then((t) =>console.log(t));

*/

console.log('Person 4: Showes Ticket');
console.log('Person 5: Showes Ticket');
