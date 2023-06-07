// document.querySelector("button").addEventListener("click",function(){
//     alert("hello");
// })

const music= document.querySelectorAll("button");
for(var i=0 ; i < music.length; i++){
    if(i==0){
        music[i].addEventListener("click",function(){
            document.getElementById("audio-1").play(); 
    })   
}
else if(i==1){
    music[i].addEventListener("click",function(){
        document.getElementById("audio-2").play(); 
}) 
}
else if(i==2){
    music[i].addEventListener("click",function(){
        document.getElementById("audio-3").play(); 
}) 
}
else if(i==3){
    music[i].addEventListener("click",function(){
        document.getElementById("audio-4").play(); 
}) 
}
else if(i==4){
    music[i].addEventListener("click",function(){
        document.getElementById("audio-5").play(); 
}) 
}
else if(i==5){
    music[i].addEventListener("click",function(){
        document.getElementById("audio-6").play(); 
}) 
}
else if(i==6){
    music[i].addEventListener("click",function(){
        document.getElementById("audio-7").play(); 
}) 
}
}