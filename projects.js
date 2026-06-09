const display=document.getElementById("display")
const display2=document.getElementById("display2")


const words=["ocean", "lantern", "gravity", "whisper", "canyon", "pixel", "thunder", "marble", "horizon", "velvet", "comet", "jungle", "circuit",
     "glacier", "melody", "ember", "satellite", "tornado", 'biscuit',
     "compass"," volcano", "mirror", "galaxy", "pineapple",];

const randomwords= Math.floor(Math.random() * words.length);
const result= words[randomwords];

function reveal(){
    const randomwords= Math.floor(Math.random() * words.length);
    const result= words[randomwords];
    
    display.value = result;
}

function BACK(){
     window.location.href='index.html';
}

const randomwords2= Math.floor(Math.random()* words.length);
const result2= words[randomwords2]

 display2.value =result2

function cleared(){
    if (display2.value=display.value){
        alert("youre correct ;)")
    }
    else{
        alert("you are wrong, try again :)") 
    }
}
 