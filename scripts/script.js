



const btn_menu=document.getElementById("btn-menu")
const slider=document.getElementById("content-slider")
const logo=document.getElementById("img")


var appear=false;

img.addEventListener("click",()=>{
    window.location("https://joaco182004.github.io/BeeOrganized/")
    
})
btn_menu.addEventListener("click",()=>{

    if(appear==false){
    slider.style.display="flex !important"
    slider.style="height:300px !important"
    slider.style.border="#412009";
    slider.style.border="3px"
    slider.style.border="solid"
    

    appear=true;
    }
    else if(appear==true){
        slider.style.transition="height 1s ease-out"
        slider.style="height:0px !important"
        slider.style.border="none"
        appear=false
    }
    console.log("Hola")
})

