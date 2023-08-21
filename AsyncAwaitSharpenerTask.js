// Initial code for simulating asynchronous actions related to watching a movie and getting snacks

console.log('Person 1: Shows Ticket');
console.log('Person 2: Shows Ticket');

const preMovie = async () => {
    const PromiseWifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ticket');
        }, 3000);
    });

    let Ticket;
    try {
        Ticket = await PromiseWifeBringingTicket;
    } catch (e) {
        Ticket = 'Sad Face';
    }

    // Simulating getting snacks
    const Getpopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const GetButter = new Promise((resolve, reject) => resolve('butter'));

    console.log('wife: I have the ' + Ticket);
    console.log('husband: We should go in');
    console.log('wife: No, I am hungry');

    let popcorn = await Getpopcorn;

    console.log('husband: I got some ' + popcorn);
    console.log('husband: We should go in');
    console.log('wife: I need butter on popcorn');

    let butter = await GetButter;

    console.log('husband: I got some ' + butter + ' on popcorn');
    console.log('husband: Anything else, darling?');
    console.log('wife: Let\'s go, we are getting late');
    console.log('husband: Thank you for the reminder *grins*');

    // New Promise for getting cold drinks
    const getColdDrinks = new Promise((resolve, reject) => resolve('cold drinks'));

    let coldDrinks = await getColdDrinks;

    console.log('husband: I got some ' + coldDrinks);
    console.log('husband: Let\'s enjoy the movie!');

    return Ticket;
};

preMovie().then((msg) => console.log('person 3: Shows ' + msg));

console.log('Person 4: Shows Ticket');
console.log('Person 5: Shows Ticket');
