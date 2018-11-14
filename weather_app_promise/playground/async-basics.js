console.log('Starting app');

setTimeout(() => {
    console.log('In callback 1');
}, 2000);

setTimeout(() => {
    console.log('In callback 2');
}, 0);

console.log('Finishing up');