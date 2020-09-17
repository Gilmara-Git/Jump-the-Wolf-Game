

window.addEventListener("load", start); 

let interval = null;
let hunter = null;
let wolf = null;
let score = null; 


function start() {

hunter = document.getElementById("hunter")
wolf = document.getElementById("wolf");
score = document.querySelector("#score")
window.addEventListener("keypress", startGame);

}


function startGame(event) {
    if(event.key === "Enter") { 
    wolf.classList.add("animationWolfRun")
    wolf.style.display= "block";
    startScore();
    }   
}

function startScore() {
    clearInterval(interval);
    score.textContent = 0;

    interval =  setInterval(() => {
        const value = Number(score.textContent);
        score.textContent = value+1; 
    
    } ,200 );
 }


 //window.addEventListener("click", jump)

 function jump() {

    if(hunter.classList != "animationHunterJump") {
        hunter.classList.add("animationHunterJump");

    }

    setTimeout(function(){
        hunter.classList.remove("animationHunterJump")
    }, 500);

 }

let loseGame =  setInterval(function() {

    const hunterHeight= 
    parseInt(window.getComputedStyle(hunter).getPropertyValue("top"));
    
    const wolfLeft = 
    parseInt(window.getComputedStyle(wolf).getPropertyValue("left"));

        if(wolfLeft < 85 && wolfLeft > 0 && hunterHeight >= 50) {
            wolf.classList.remove("animationWolfRun")
            //wolf.style.display="none"
            
            clearInterval(interval)
            alert("SORRY YOU LOST! Press ENTER to play again!" )
        }
        
}, 30);

