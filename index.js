const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const myInterval = setInterval(render, 5000);
let peopleCount = 0;
let totalPrice = 0;
let averageStartingPrice = 0;
function getIndex() {
    return Math.floor(Math.random() * freelancers.length);
}

function render() {

    const userIndex = getIndex();

    const names = document.querySelector("#name");
    const freelancer = freelancers[userIndex].name;
    const nameElement = document.createElement("li");
    nameElement.textContent = freelancer;

    names.appendChild(nameElement);

    const occupation = document.querySelector("#occupation");
    const job = freelancers[userIndex].occupation;
    const jobElement = document.createElement("li");
    jobElement.textContent = job;

    occupation.appendChild(jobElement);

    const startingPrice = document.querySelector("#startingPrice");
    const price = freelancers[userIndex].price;
    const priceElement = document.createElement("li");
    priceElement.textContent = price;

    startingPrice.appendChild(priceElement)

    peopleCount += 1;
    totalPrice += price;
    averageStartingPrice = totalPrice / peopleCount;
    const average = document.querySelector("span");
    average.textContent = Math.round(averageStartingPrice);

    if (averageStartingPrice <= 35) {
        clearInterval(myInterval);
    }

}

