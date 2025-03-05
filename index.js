const freelancers = [{
    name: 'Alice',
    occupation: 'writer',
    price: 30
}, {
    name: 'Bob',
    occupation: 'teacher',
    price: 50
}];

// const newFreelancers = [{
//     name: 'Carol',
//     occupation: 'programmer',
//     price: 70
// }, {
//     name: 'Jack',
//     occupation: 'coach',
//     price: 40
// }, {
//     name: 'Greg',
//     occupation: 'therapist',
//     price: 70
// }, {
//     name: 'Shannon',
//     occupation: 'accountant',
//     price: 60
// }];
const names = ['Alice', 'Bob', 'Carol', 'Jack', 'Greg', 'Shannon']
const prices = [30, 50, 70, 40, 70, 60, 80];
const occupations = ['writer', 'teacher', 'programmer', 'coach', 'therapist', 'accountant', 'banker'];
// const maxFreelancers = 10;

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const price = prices[Math.floor(Math.random() * 10)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    freelancers.push({name, price, occupation});
}

// function averagePrice() {
//     const sum = price.reduce((acc, initialValue) => {
//         return acc + initialValue;
//     }, 0);
//     const averageList = document.querySelector('#average');
//     const averageElements = price.map((average) => {
//         const averageElement = document.createElement('li');
//         averageElement.textContent = sum / freelancers.length;
//         document.header.append(averageElement);
//         return averageElement;
//     });
    
//     averageList.replaceChildren(...averageElements);
// }
// let price = freelancers.price;
// const sum = freelancers.reduce((acc, initialValue) => {
//     return acc + initialValue;
// }, 0);
// let average = sum / freelancers.length;
function average() {
    const sum = freelancers.reduce((acc, freelancer) => {
        return acc + freelancer.price;
    }, 0);
    const average = sum / freelancers.length;
    return average;
}

// function randomPrice() {
//     Math.floor(Math.random() * (110 - 20)) + 20;
// };

function render() {
    const averageList = document.querySelector('#average');
    const header = document.querySelector('header');
    // const averageElements = prices.map((price) => {
    //     const averageElement = document.createElement('li');
    //     averageElement.textContent = `The average stating price is ${average()}.`;
    //     header.append(averageElement);
    //     return averageElement;
    // });
    averageList.textContent = `The average stating price is ${average()}.`
    
    const freelancerList = document.querySelector('#freelancers');
    const body = document.querySelector('body');
    const freelancerElements = freelancers.map((freelancer) => {
        const freelancerElement = document.createElement('li');
        freelancerElement.textContent = freelancer.name + ' ' + freelancer.occupation + ' ' + freelancer.price;
        body.append(freelancerElement);
        return freelancerElement;
    });
    
    freelancerList.replaceChildren(...freelancerElements);
}

const addFreelancerIntervalId = setInterval(() => {
    addFreelancer();
    render();
    average(averageElement);
    if (averageElement !== 1) {
        clearInterval(addFreelancerIntervalId);
    }
}, 2000);


render();