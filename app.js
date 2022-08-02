var colors = ["darkred","crimson","lime","teal","dodgerblue"];

var ids = ["box1","box2","box3","box4","box5","box6","box7","box8","box9"];


var random=colors[Math.floor(Math.random()*colors.length)];
var matchColor = document.getElementById("matchColor");
var compare = matchColor.style.backgroundColor = random

    for (var i = 0; i < ids.length; i++) {
        var randoms =colors[Math.floor(Math.random() * colors.length)];
        var getId = ids[i];
        var pushh = document.getElementById(getId);
        pushh.style.backgroundColor = randoms

        // if (pushh.style.backgroundColor !== compare.toLowerCase()) {

        //     console.log("ask")
    
        // 
    }

var score = 1

    
    


function balloon1(){

    var box1=document.getElementById("box1");

    if (box1.style.backgroundColor === compare.toLowerCase()){
        document.getElementById("score").innerText=score++
        randoms =colors[Math.floor(Math.random() * colors.length)];
        box1.style.backgroundColor = randoms
        box1.style.transition="0.3s"

    }

    else{
        alert("Don't Choose Wrong Color")
    }
    random=colors[Math.floor(Math.random()*colors.length)];
    matchColor = document.getElementById("matchColor");
    compare = matchColor.style.backgroundColor = random

}

function balloon2(){
    var box2=document.getElementById("box2");

    if (box2.style.backgroundColor === compare.toLowerCase()){
        document.getElementById("score").innerText=score++
        randoms =colors[Math.floor(Math.random() * colors.length)];
        box2.style.backgroundColor = randoms
        box2.style.transition="0.3s"

    }

    else{
        alert("Don't Choose Wrong Color")
    }

    random=colors[Math.floor(Math.random()*colors.length)];
    matchColor = document.getElementById("matchColor");
    compare = matchColor.style.backgroundColor = random

}

function balloon3(){
    var box3=document.getElementById("box3");

    if (box3.style.backgroundColor === compare.toLowerCase()){
        document.getElementById("score").innerText=score++
        randoms =colors[Math.floor(Math.random() * colors.length)];
        box3.style.backgroundColor = randoms
        box3.style.transition="0.3s"
    }

    else{
        alert("Don't Choose Wrong Color")
    }

    random=colors[Math.floor(Math.random()*colors.length)];
    matchColor = document.getElementById("matchColor");
    compare = matchColor.style.backgroundColor = random

}


function balloon4(){
    var box4=document.getElementById("box4");

    if (box4.style.backgroundColor === compare.toLowerCase()){
        document.getElementById("score").innerText=score++
        randoms =colors[Math.floor(Math.random() * colors.length)];
        box4.style.backgroundColor = randoms
        box4.style.transition="0.3s"
    }

    else{
        alert("Don't Choose Wrong Color")
    }

    random=colors[Math.floor(Math.random()*colors.length)];
    matchColor = document.getElementById("matchColor");
    compare = matchColor.style.backgroundColor = random

}


function balloon5(){
    var box5=document.getElementById("box5");

    if (box5.style.backgroundColor === compare.toLowerCase()){
        document.getElementById("score").innerText=score++
        randoms =colors[Math.floor(Math.random() * colors.length)];
        box5.style.backgroundColor = randoms
        box5.style.transition="0.3s"
    }

    else{
        alert("Don't Choose Wrong Color")
    }


    random=colors[Math.floor(Math.random()*colors.length)];
    matchColor = document.getElementById("matchColor");
    compare = matchColor.style.backgroundColor = random

}


function balloon6(){
    var box6=document.getElementById("box6");

    if (box6.style.backgroundColor === compare.toLowerCase()){
        document.getElementById("score").innerText=score++
        randoms =colors[Math.floor(Math.random() * colors.length)];
        box6.style.backgroundColor = randoms
        box6.style.transition="0.3s"
    }

    else{
        alert("Don't Choose Wrong Color")
    }

    random=colors[Math.floor(Math.random()*colors.length)];
    matchColor = document.getElementById("matchColor");
    compare = matchColor.style.backgroundColor = random

}

function balloon7(){
    var box7=document.getElementById("box7");

    if (box7.style.backgroundColor === compare.toLowerCase()){
        document.getElementById("score").innerText=score++
        randoms =colors[Math.floor(Math.random() * colors.length)];
        box7.style.backgroundColor = randoms
        box7.style.transition="0.3s"
    }

    else{
        alert("Don't Choose Wrong Color")
    }

    random=colors[Math.floor(Math.random()*colors.length)];
    matchColor = document.getElementById("matchColor");
    compare = matchColor.style.backgroundColor = random

}


function balloon8(){
    var box8=document.getElementById("box8");

    if (box8.style.backgroundColor === compare.toLowerCase()){
        document.getElementById("score").innerText=score++
        randoms =colors[Math.floor(Math.random() * colors.length)];
        box8.style.backgroundColor = randoms
        box8.style.transition="0.3s"
    }

    else{
        alert("Don't Choose Wrong Color")
    }


    random=colors[Math.floor(Math.random()*colors.length)];
    matchColor = document.getElementById("matchColor");
    compare = matchColor.style.backgroundColor = random

}


function balloon9(){
    random=colors[Math.floor(Math.random()*colors.length)];
    matchColor = document.getElementById("matchColor");
    compare = matchColor.style.backgroundColor = random

    var box9=document.getElementById("box9");

    if (box9.style.backgroundColor === compare.toLowerCase()){
        document.getElementById("score").innerText=score++
         randoms =colors[Math.floor(Math.random() * colors.length)];
         box9.style.backgroundColor = randoms
         box9.style.transition="3s"
        


    }

    else{
        alert("Don't Choose Wrong Color")
    }

   

}


