let katalogBtn =document.getElementById("hamburger2");
let katalog2 = document.getElementById("dropdown");
let katalog=document.getElementById("hamburger");
let tabBtn=document.querySelectorAll(".tab-buttons button");
let tabContent =document.querySelectorAll(".tab-content");
let active = 0;

function getTabContent(){
tabContent.forEach((el,i)=>{
  if(i!==active){
    el.style.display="none"
    tabBtn[i].classList.remove("active-tab");
  }else{
    el.style.display="block"
    tabBtn[i].classList.add("active-tab");

  }
})

}
getTabContent();

tabBtn.forEach((el,i)=>{
  el.addEventListener("click",function(){
    active=i;
    getTabContent();
  })
})

function toggle(){
  katalog2.classList.toggle("hidden");
  if(katalog2.classList.contains("hidden")){
  katalog2.style.display="block"
  }else{
  katalog2.style.display="none"
  }
}

katalogBtn.onclick=toggle;
function toggle2(){
  katalog2.classList.toggle("hidden");
  if(katalog2.classList.contains("hidden")){
  katalog2.style.display="block"
  }else{
  katalog2.style.display="none"
  }
}
katalog.onclick=toggle2;


let aleks = document.getElementsByClassName("aleksey1")[0];
let modal = document.getElementsByClassName("vxod-box")[0];
let zakrit = document.getElementsByClassName("x")[0];
let aleks2 = document.getElementsByClassName("aleksey2")[0];
aleks.addEventListener("click", function() {
   modal.style.display = "block";
});
aleks2.addEventListener("click", function() {
   modal.style.display = "block";
});
zakrit.addEventListener("click", function() {
   modal.style.display = "none";
});



