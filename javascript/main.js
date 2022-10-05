//start background iamegs in lading
let mylding =document.getElementById("home");
let myimags =["img1.jpg","img3.jpg","img4.jpg","img5.jpg"];
let randomBackground = setInterval(()=> {
    let random = Math.floor(Math.random() * myimags.length);
    mylding.style.background = `url(${"../iamg/" + myimags[random]})`;
},2000);
//remov random background

function removebackground(){
    clearInterval(randomBackground)
}
//end background iamegs in lading
//start setting
let setting = document.querySelector(".setting");
let settinglogo = document.querySelectorAll(".logo-setting");
settinglogo.forEach(ele => {
    ele.addEventListener("click",()=>{
        setting.classList.toggle("activ");
        
    if(setting.classList.contains("activ")){
    ele.style.backgroundImage =`url("../icon/close.png")`
    }else{
        ele.style.backgroundImage=`url("../icon/cog-solid.svg")`
    }
    })
    
});

let color = document.querySelectorAll(".input-color li");
color.forEach(li =>{
    li.addEventListener("click",e=>{
    document.documentElement.style.setProperty("--orange-color",e.target.dataset.color)
    window.localStorage.setItem("color",e.target.dataset.color)

})
})

if(window.localStorage.getItem("color")){
    document.documentElement.style.setProperty("--orange-color", window.localStorage.color)
    
}


//stop random background

// let norandom=document.getElementById("yes");
// norandom.onclick= function(){
//     clearInterval(randomBackground)
//     console.log("done")
// };
// let yesrandom=document.getElementById("no");
//     yesrandom.onclick= function(){
//         if(clearInterval(randomBackground) == true){
//             }
//     console.log("done")
// }

let yesorno = document.querySelectorAll(".yes-or-no li");

yesorno.forEach(li =>{
li.addEventListener("click", ()=>{
    document.querySelector(".yes-or-no .activ-btn").classList.remove("activ-btn")
    li.classList.add("activ-btn");

        if(document.querySelector("#no").classList.contains("activ-btn")){
            if(removebackground = true){
            console.log("done")
            }
        }else{
            removebackground()
            console.log("true")
        }

})
});




//end setting

//skils anmiton 

let myskils = document.querySelector(".skils");
let spanwidth = document.querySelectorAll(".row span");
let mynav  = document.querySelector(".nav-bar")
let zero = 0;
 

window.onscroll = (e)=>{

    if(this.scrollY >= 100){
        mynav.style.background = "#000";
    }else{
        mynav.style.background ="transparent";

    };
    if(this.scrollY >= myskils.offsetTop - 400){
        spanwidth.forEach(ele=>{
            ele.style.width = ele.dataset.width; 
            
        })
    // spanwidth.innerHTML =   spanwidth.dataset.width 
    }else{
            spanwidth.forEach(ele=>{
                ele.style.width = "10%"
            })
    }
}

//scroll my bag 

//start gallery

let gallery = document.querySelectorAll(".gallery-img img");
let closeBtn =document.querySelector(".close");
let openBtn =document.querySelector(".background-viwe");
let photoViaw =document.querySelector(".photo-viwe img");

// openBtn.onclick = openViwe();

closeBtn.onclick = function removeCloseBtn (){
    openBtn.style.display ="none";
}
// function openViwe(){
//     openBtn.style.display ="flex";

// }

gallery.forEach(e=>{
e.addEventListener("click",function(){
    let srcgallery = e.getAttribute("src");
    photoViaw.setAttribute("src",srcgallery)
    openBtn.style.display ="flex";
})
})
//end gallery 

// bar manu
let manu = document.querySelectorAll(".manu");
let opanmanu = document.querySelector(".list-mo");
let iconmanu = document.querySelector(".manu i");

manu.forEach(ele => {
    ele.addEventListener("click",()=>{
        opanmanu.classList.toggle("activ-ds");
        iconmanu.classList.toggle("fa-bars");
        iconmanu.classList.toggle("fa-times");
    })})
