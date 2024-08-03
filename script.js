let emptys = document.querySelectorAll(".empty");
let fill = document.querySelector(".fill");

for(const empty of emptys){
empty.addEventListener("dragover",function(e){
    e.preventDefault();
    empty.classList.add("hovered")
})
empty.addEventListener("dragleave",function(){
    empty.classList.remove("hovered")
})
empty.addEventListener("drop",function(){
    empty.appendChild(fill)
    empty.classList.remove("hovered");
})
}

