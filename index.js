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

const priceArray = [];
let averageStartingPrice = 0;
function getIndex() {
    return Math.floor(Math.random() * freelancers.length);
}

function render() {
    

    const names = document.querySelector("#name");
    const freelancer = freelancers[getIndex()].name;
    const nameElement = document.createElement("li");
    nameElement.textContent = freelancer;

    names.appendChild(nameElement);

    const occupation = document.querySelector("#occupation");
    const job = freelancers[getIndex()].occupation;
    const jobElement = document.createElement("li");
    jobElement.textContent = job;

    occupation.appendChild(jobElement);

    const startingPrice = document.querySelector("#startingPrice");
    const price = freelancers[getIndex()].price;
    const priceElement = document.createElement("li");
    priceElement.textContent = price;
    priceArray.push(price);

    startingPrice.appendChild(priceElement)

    averageStartingPrice = (averageStartingPrice + price) / priceArray.length;
    const average = document.querySelector("span");
    average.textContent = Math.round(averageStartingPrice);
}

setInterval(render, 5000);