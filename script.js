// question 1

var cat = {
    name: "Loly",
    age: "5",
    color: "orange",

    complain: function () {
        console.log("Meow!");
    }
}
cat.complain();


// question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// question 3
const h3 = document.querySelector("h3");
heading.style.fontSize = "2em";

// question 4

const subheading = document.querySelector(".subheading");
subheading.innerHTML = "Uptated Title";

// question 5

const div = document.getElementById("paragraphs");
div.style.color = "red";

// question 6
const results = document.querySelector('.results');
const resultsContainer = document.querySelector('.results');

results.style.backgroundColor = "yellow";
resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";

// question 7

const catss = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function list(catss) {

    for (let i = 0; i < catss.length; i++) {
        catss[i] += "e"
        return (catss)
    }

}
console.log(catss);


// question 8

const cats = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function createCats(cats) {

    for (let i = 0; i < cats.length; i++) {

        const catsAge = cats[i].age;
        const catsName = cats[i].name;

        if (catsAge === "number") {

            document.querySelector(".cat-container").innerHTML += `<div><h5> 
     ${catsName}</h5> <p> ${catsAge} </p> </div>
     `;

        }
        document.querySelector(".cat-container").innerHTML += `<div><h5>
      ${catsName}</h5> <p> ${catsAge} </p></div>`;

    }

}
createCats(cats);