//DOMElements
let diceEl= document.querySelector(".btn--roll")
let imgEl = document.querySelector(".dice")
let playerEl0=document.querySelector(".player--0")
let playerEl1=document.querySelector(".player--1")
let holdEl = document.querySelector(".btn--hold")
let newEl = document.querySelector(".btn--new")
let gifEl= document.querySelector(".gif")
let scoreEl1 =document.querySelector("#score--1")
let scoreEl0 =document.querySelector("#score--0")
let currentEl0 =document.querySelector("#current--0")
let currentEl1 =document.querySelector("#current--1")



let playing;
let score;
let activeplayer;
let totalScore;


const init= () =>{
playing=true;
activeplayer=0;
score=0
totalScore=[0,0]
imgEl.classList.add("hidden")
playerEl0.classList.add("player--active")
playerEl0.classList.remove("player--winner")
playerEl1.classList.remove("player--winner")
playerEl1.classList.remove("player--active")
gifEl.style.visibility="hidden"


scoreEl1.textContent = 0
scoreEl0.textContent= 0 
currentEl0.textContent = 0
currentEl1.textContent = 0



}
init();





const changePlayer=()=>{
    document.getElementById(`current--${activeplayer}`).textContent=0;
    activeplayer = activeplayer === 0 ? 1 :0;
    score=0
    playerEl0.classList.toggle("player--active")
    playerEl1.classList.toggle("player--active")
 

}

;
diceEl.addEventListener("click",function(){

    if(playing){
        let dice=Math.trunc(Math.random()*6)+1
        imgEl.classList.remove("hidden")
        imgEl.src=`dice-${dice}.png`

        if(dice!==1){
            console.log(dice)
            score+=dice
            document.getElementById(`current--${activeplayer}`).textContent=score;


        }else  if(dice===1){

            changePlayer()
        
           }




    }
   
    
  
 

}

)
holdEl.addEventListener("click", ()=>{
    if (playing){

        totalScore[`${activeplayer}`]+=score
        document.getElementById(`score--${activeplayer}`).textContent=totalScore[`${activeplayer}`]
        
        if(totalScore[`${activeplayer}`] >= 100){
            gifEl.style.visibility="visible"
            
            imgEl.style.display="none"
            document.querySelector(`.player--${activeplayer}`).classList.add("player--winner")
            playing=false
            
        }else{
            changePlayer()

        }
    }

})

newEl.addEventListener("click", () =>{

init()


})
