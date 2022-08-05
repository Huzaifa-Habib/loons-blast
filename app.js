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

       
    }

var score = 0

var gameOverScore = 0;

function balloon(b) {
    var activeBalloon = document.getElementById(b);

    if(activeBalloon.style.backgroundColor === compare.toLowerCase()) {
        document.getElementById("score").innerText=++score

        randoms =colors[Math.floor(Math.random() * colors.length)];


         for (var i = 0; i < ids.length; i++) {
            var randoms =colors[Math.floor(Math.random() * colors.length)];
            var getId = ids[i];
            var pushh = document.getElementById(getId);
            pushh.style.backgroundColor = randoms
            pushh.style.transition="3s ease"
     
        }

        activeBalloon.animate([   
            { transform: 'translateY(0px)'},
            { transform: 'translateY(-600px)'},
            {transition: '2s'}
        ],{
            duration: 1500
        });
    }

    else{
            alert("Don't Choose Wrong Color,You Have Only 3 Try's")
            ++gameOverScore
        }

        if (gameOverScore === 3){
            var mainId=document.getElementById("mainBranch");
            mainId.style.display = "none"

            document.getElementById("totalScore").innerText=score
            var afterOver = document.getElementById("afterOver");
            afterOver.style.display="block"

        }


    random=colors[Math.floor(Math.random()*colors.length)];
    matchColor = document.getElementById("matchColor");
    compare = matchColor.style.backgroundColor = random


}

    
    

