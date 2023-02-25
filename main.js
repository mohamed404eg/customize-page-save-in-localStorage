let customize = document.querySelector("#customize");
let open = document.querySelector(".clikopen");

open.addEventListener("click" , ()=> {
    customize.classList.toggle("clos")
})


// coler 

let colorRed = document.querySelector(".color-red");
let colorAntiqueWhite = document.querySelector(".color-AntiqueWhite");
let colorAliceBlue = document.querySelector(".color-AliceBlue");
let colorAqua = document.querySelector(".color-Aqua");

colorRed.addEventListener("click", ()=> {
    window.localStorage.color = "red";
    reloadco();
});

colorAntiqueWhite.addEventListener("click", ()=> {
    window.localStorage.color = "#FAEBD7";
    reloadco();
});
colorAliceBlue.addEventListener("click", ()=> {
    window.localStorage.color = "#F0F8FF";
    reloadco();
});
colorAqua.addEventListener("click", ()=> {
    window.localStorage.color = "#00FFFF";
    reloadco();
});

function reloadco() {
    document.body.style.color = window.localStorage.color;

}
document.body.style.color = window.localStorage.color;

// coler 

// font size 
let font20 = document.querySelector(".font-20");
let font25 = document.querySelector(".font-30");
let font30 = document.querySelector(".font-40");
let font35 = document.querySelector(".font-50");



font20.addEventListener("click", ()=> {
    window.localStorage.fontSize = "20px";
    reloadont()
});
font25.addEventListener("click", ()=> {
    window.localStorage.fontSize = "25px";
    reloadont()
});
font30.addEventListener("click", ()=> {
    window.localStorage.fontSize = "30px";
    reloadont()
});
font35.addEventListener("click", ()=> {
    window.localStorage.fontSize = "35px";
    reloadont()
});

function reloadont() {
    document.body.style.fontSize = window.localStorage.fontSize;

}
document.body.style.fontSize = window.localStorage.fontSize;

// font size 

// bacgrund coler 

let colorRedB = document.querySelector(".color-red-b");
let colorAntiqueWhiteB = document.querySelector(".color-AntiqueWhite-b");
let colorAliceBlueB = document.querySelector(".color-AliceBlue-b");
let colorAquaB = document.querySelector(".color-Aqua-b");

colorRedB.addEventListener("click", ()=> {
    window.localStorage.backgroundColor = "red";
    reloadbac()

});

colorAntiqueWhiteB.addEventListener("click", ()=> {
    window.localStorage.backgroundColor = "#FAEBD7";
    reloadbac()
});
colorAliceBlueB.addEventListener("click", ()=> {
    window.localStorage.backgroundColor = "#F0F8FF";
    reloadbac()
});
colorAquaB.addEventListener("click", ()=> {
    window.localStorage.backgroundColor = "#00FFFF";
    reloadbac()
});

function reloadbac() {
    document.body.style.backgroundColor = window.localStorage.backgroundColor;

}
document.body.style.backgroundColor = window.localStorage.backgroundColor;

// bacgrund coler 



// rest  localstorage
let rest = document.querySelector(".rest ");
rest.addEventListener("click", ()=>{
    window.localStorage.clear();
    document.body.style.color = "black";
    document.body.style.fontSize = "";
    document.body.style.backgroundColor = "";

})

