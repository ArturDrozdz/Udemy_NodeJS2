
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number')
                resolve (a +b);
            else
                reject ('Arg must be number');
        }, 1500);
    });
};

asyncAdd(3, '4').then((res) => {
    console.log('Result : ', res);
    return asyncAdd(10, res);
}).then((res) => {
    console.log('Should be 17 : ', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
    
});

/*
var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, it worked !');
    }, 2000)
});

somePromise.then((message) => {
    console.log("Success", message);
}, (errorMessage) => {
    console.log('Error ', message);
}); */