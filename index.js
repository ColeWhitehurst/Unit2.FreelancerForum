const freelancers = [{
    name: 'Alice',
    occupation: 'writer',
    price: 30
}, {
    name: 'Bob',
    occupation: 'teacher',
    price: 50
}];

const newFreelancers = [{
    name: 'Carol',
    occupation: 'programmer',
    price: 70
}, {
    name: 'Jack',
    occupation: 'coach',
    price: 40
}, {
    name: 'Greg',
    occupation: 'therapist',
    price: 70
}, {
    name: 'Shannon',
    occupation: 'accountant',
    price: 60
}];
// const people = ['Alice', 'Bob', 'Carol', 'Jack', 'Greg', 'Shannon']
const prices = [30, 50, 70, 40, 70, 60, 80];
// const occupation = ['writer', 'teacher', 'programmer', 'coach', 'therapist', 'accountant', 'banker'];
// const maxFreelancers = 10;

function addFreelancer() {
    const freelancer = newFreelancers[Math.floor(Math.random() * freelancers.length)];
    // if (freelancers.length >= maxFreelancers) {
    //     clearInterval(addFreelancerIntervalId)
    // }
    freelancers.push({freelancer});
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
const price = freelancers.price;
const sum = freelancers.reduce((acc, initialValue) => {
    return acc + initialValue;
}, 0);
const average = sum / freelancers.length;

function render() {
    const averageList = document.querySelector('#average');
    const header = document.querySelector('header');
    const averageElements = prices.map((price) => {
        const averageElement = document.createElement('li');
        averageElement.textContent = average;
        header.append(averageElement);
        return averageElement;
    });
    
    const freelancerList = document.querySelector('#freelancers');
    const body = document.querySelector('body');
    const freelancerElements = freelancers.map((freelancer) => {
        const freelancerElement = document.createElement('li');
        freelancerElement.textContent = freelancer.name + ' ' + freelancer.occupation + ' ' + freelancer.price;
        body.append(freelancerElement);
        return freelancerElement;
    });
    
    averageList.replaceChildren(...averageElements);
    freelancerList.replaceChildren(...freelancerElements);
}

const addFreelancerIntervalId = setInterval(() => {
    addFreelancer();
    render();
}, 2000);


render();