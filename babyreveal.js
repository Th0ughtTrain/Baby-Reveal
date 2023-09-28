let revealBtn = document.getElementsByClassName("reveal")[0];

revealBtn.addEventListener("click", () => {
    console.log("Im selected");
    let body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = "Pink";
    revealBtn.style.display = "none";
    let msg = body[0].appendChild(document.createElement("h1"));
    let msgStyle = msg.style;
    console.log(msg);
    msg.textContent = "Its a Girl!!";
    msgStyle.fontSize = "10em"
    msgStyle.color = "white";
    
    
})