const titleInput = document.getElementById("title");
const genreInput = document.getElementById("genre");
const saveButton = document.getElementById("saveButton");
const clearButton = document.getElementById("clearButton");
const output = document.getElementById("output");

function displayMovies() {
    output.innerHTML = "";
    const movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.forEach((movie, index) => {
        const p = document.createElement("p");
        p.textContent = `${index + 1}. ${movie.title} (${movie.genre})`;
        output.appendChild(p);
    });
}

saveButton.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const genre = genreInput.value.trim();
    if (title && genre) {
        const movies = JSON.parse(localStorage.getItem("movies")) || [];
        movies.push({ title, genre});
        localStorage.setItem("movies", JSON.stringify(movies));
        displayMovies();
        titleInput.value = "";
        genreInput.value = "";
    }
});

clearButton.addEventListener("click", () => {
    localStorage.removeItem("movies");
    displayMovies();
});

displayMovies();






// rabbit object with a method that uses 'this' to access its color property
const rabbit = {
    color: "white",
    checkWatch() {
        console.log(`A ${this.color} rabbit checks his watch and exclaims I'm late!`);
    }
};
rabbit.checkWatch();

// spaceship object with a method that uses 'this' to access its name property
const spaceship = {
    name: "Apolla 11",
    launch() {
        return `You have launched the spaceship ${this.name}!`;
    }
}
console.log(spaceship.launch());

// shopping cart object with methods to add and remove items, using 'this' to access the contents array
const shoppingCart = {
    contents: [],
    addItem(item) {
        this.contents.push(item);
    },

    removeItem(item) {
        let indexNum = this.contents.indexOf(item)
        if (indexNum > -1) {
            this.contents.splice(indexNum, 1)
            console.log("Success!")
        } else {
            console.log("That item does not exist.")
        }
    }
};
shoppingCart.addItem("laptop");
shoppingCart.addItem("mac");
for (items of shoppingCart.contents) {
    console.log(items)
}


shoppingCart.removeItem("laptop");
shoppingCart.removeItem("phone");
console.log(items);

// lever object with a method that uses 'this' to access its stamp property
const lever = {
    stamp: "ACME",
    pull() {
        console.log(`An anvil stamped ${this.stamp} drops on your head.`)
    }
}
lever.pull();

// deadPool object with a method that uses 'this' to access its properties
const deadPool = {
    name: "Wade Wilson",
    weapon: "Katana",
    health: "Immortal",
    suit: {
        color: "red and black"
    },

    fight() {
        return `${this.name} fights with a ${this.weapon} and since he is ${this.health}, then he can never die, but his ${this.suit.color} suit always gets damaged.`
    }
}
console.log(deadPool.fight());