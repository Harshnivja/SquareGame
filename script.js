let sq1 = document.getElementById("sq1");
sq1.addEventListener("mouseenter", function () {
    let r = Math.floor(Math.random() * 100);
    sq1.innerHTML = `<h1>${r}</h1>`;
})
sq1.addEventListener("mouseleave", function () {
    sq1.innerHTML = " <h1>1</h1>";
})

let sq2 = document.getElementById("sq2");
let clr = "red";
sq2.addEventListener("mouseenter", function () {
    if (clr == "red") {
        sq2.style.backgroundColor = "red"
        clr = "green";
    }
    else if (clr == "green") {
        sq2.style.backgroundColor = "green";
        clr = "blue";
    }
    else {
        if (clr == "blue") {
            sq2.style.backgroundColor = "blue";
            clr = "red";
        }
    }
})
sq2.addEventListener("mouseleave", function () {
    sq2.style.backgroundColor = "white";
})

let sq3 = document.getElementById("sq3");
sq3.addEventListener("mouseenter", function () {
    let r1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);
    sq3.style.backgroundColor = `rgb( ${r1} , ${r2} ,${r3})`;

})
sq3.addEventListener("mouseleave", function () {
    sq3.style.backgroundColor = "white";
})


let sq4 = document.getElementById("sq4");
sq4.addEventListener("click", function () {
    let r1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);
    sq1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
    sq2.style.backgroundColor = `rgb(${r2},${r1},${r3})`;
    sq3.style.backgroundColor = `rgb(${r3},${r2},${r1})`;
})
sq4.addEventListener("mouseleave", function () {
    sq1.style.backgroundColor = "white";
    sq2.style.backgroundColor = "white";
    sq3.style.backgroundColor = "white";
})
