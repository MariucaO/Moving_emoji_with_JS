// moving emoji with key events

const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event =>{
    myBox.textContent = "😁";
    myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keyup", event =>{
    myBox.textContent = "🙂";
    myBox.style.backgroundColor = "olive";
});

// for moving the element I used arrow keys

const moveAmount = 100;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{
    if( event.key.startsWith("Arrow")){

        event.preventDefault();

    switch (event.key){
        case "ArrowUp":
            y -= moveAmount;
            break;
        case "ArrowDown":
            y += moveAmount;
            break;
        case "ArrowLeft":
            x -= moveAmount;
            break;
        case "ArrowRight":
            x += moveAmount;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }

    });