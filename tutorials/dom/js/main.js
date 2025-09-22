/*
console.log("hello hello");

let pageTitle = document.querySelector("#page-title");

//Timeout changes h1 title after 3 seconds
setTimeout(function(){
    pageTitle.style.color = "pink";
}, 3000)

//Click event changes header color
document.querySelector("header").onclick = function() {
    document.querySelector("header").style.backgroundColor = "beige";
    //console.log("you clicked the header");
}
*/

document.querySelector("#image-0").addEventListener("click", function(){
    document.querySelector("#image-1").style.visibility = "visible";
})

document.querySelector("#image-1").addEventListener("click", function(){
    document.querySelector("#image-2").style.visibility = "visibile";
})

document.querySelector("#image-2").addEventListener("click", function(){
    /* document.querySelector("#image-2").style.visibility = "visibile"; */
})