
let userScore=0;
let compScore=0;

//sari choices ko acess kar rahe hai 
//jis bhi element ke pass hamri class hogi choice 
//This selects all elements in the document that have the class "choice".
//It returns a NodeList, which is a collection of all matching elements.
//NodeList is not an array, but it can be looped through using forEach()
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const genComputerChoice=()=>{
     //comp randomly ek generate karega 
    //hum array me apne choices ko store kara sakte hai 
    const options=["rock","paper","scissors"];
    //random method 0 se 1 ke bich me koi bhi random no generate karta hai 
    //0 se 2 ki range me lane ke lie * 3 karna hoga 
    //decimal ko remove karne ke lie  math.floor use karenge 
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]; //comp ki choice
   
};

const drawgame=()=>{
   
    msg.innerText="Game was Draw. Play again!!";
    msg.style.backgroundColor="blue";
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
   userScore++; //update score
   userscorepara.innerText=userScore;
    msg.innerText=`You won !! ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
    }
    else{
       compScore++;
       compscorepara.innerText=compScore;
        msg.innerText=`Yous lost !! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};


const playGame=(userchoice)=>{

//generate computer choice 
const compchoice=genComputerChoice();


if(userchoice==compchoice){
 //draw
 drawgame();
}
else
{
    let userwin=true;
    if(userchoice=="rock"){
        //scissors or paper
        userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice=="paper"){
        userwin=compchoice==="scissors"?false:true;
    }
    else{
        userwin=compchoice=="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}
};


//har ek div pe event listener add karenge
//sare CHOICES se ek ek CHOICE nikal rahe hai 
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
   const userchoice=choice.getAttribute("id");
 
   playGame(userchoice);
});
});