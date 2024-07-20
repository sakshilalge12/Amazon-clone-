const backtop = document.querySelector(".backtop");

backtop.addEventListener("click",()=>{ 
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

})

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".menu");

sidebtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active"); 
})

cross.addEventListener("click",() => {
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active"); 
})

const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-list");

sign.addEventListener("click" , () => {
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
})