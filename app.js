

var colors = ["#fca5a5","#c2410c","#a3e635","#86efac","#0891b2","#6d28d9"];

var ids = ["box1","box2","box3","box4","box5","box6"];


var random=colors[Math.floor(Math.random()*colors.length)];
var matchColor = document.getElementById("matchColor");
var compare = matchColor.style.backgroundColor=random





function start(){
    for (var i = 0; i < ids.length; i++) {
        var randoms =colors[Math.floor(Math.random() * 5)];
        var getId = ids[i];
        var pushh = document.getElementById(getId);
        pushh.style.backgroundColor = randoms
    }
    var random=colors[Math.floor(Math.random()*colors.length)];
    var matchColor = document.getElementById("matchColor");
    
    
}


function balloon1(){
    var box1=document.getElementById("box1");
    

    
}



