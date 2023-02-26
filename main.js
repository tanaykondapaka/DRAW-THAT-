var drawings=["Rain","Flower","Car","Sun","Line","Dog","Bicycle","Apple","Clock","Shirt"];
var random = Math.floor((Math.random()*10));
var drw=0
var r=0;
var g=0;
var b=0;
var thk=10;
score=0
pen=1;
bb=1;
rr=0;
gg=0;
bl=0;
console.log(drw);
window.addEventListener("mousemove", mouse);
window.addEventListener("load", function(){
    document.getElementById("black").innerHTML="•"
    timer();
    setInterval(function(){document.body.scrollTop=0;
        
        thk=document.getElementById("slider").value;
        if(pen==0){document.getElementById("colors").style.opacity="0.5"}
        else{document.getElementById("colors").style.opacity="1"}
        document.body.style.cursor="none";

},1)
    random = Math.floor((Math.random()*10));
    drw=drawings[random];
    document.getElementById("given").innerHTML=drw;})


function update(){
  updateCanvas()
    drw=drawings[random];
    console.log(random);
    setInterval(function(){document.body.scrollTop=0;
        
        if(pen==0){document.getElementById("colors").style.opacity="0.5"}
        else{document.getElementById("colors").style.opacity="1"}
        thk=document.getElementById("slider").value
    },1)
    random = Math.floor((Math.random()*10));
    drw=drawings[random]
    while(drw==document.getElementById("given").innerHTML){
        random = Math.floor((Math.random()*10));
        drw=drawings[random]   
    }
    document.getElementById("given").innerHTML=drw;
    
 
}



x=10
function timer(){
    if(x<0){update();x=10}
setTimeout(time, 1000);}


function time() {

  document.getElementById("time").innerHTML=x
  x=x-1
  timer()
}

function setup(){
canvas=createCanvas(1100,600);
canvas.position(320,55)
background("white");
canvas.mouseReleased(check)
}
function updateCanvas(){
document.getElementById("drawing").innerHTML=""
document.getElementById("confidence").innerHTML=""
    background("white");
    if(ans==((document.getElementById("given").innerHTML).toLowerCase())){
        score=score+1;
        document.getElementById("score").innerHTML=score;
                }



}
function preload(){
   classifier= ml5.imageClassifier('DoodleNet');
}



function draw(){
    strokeWeight(thk);
    stroke(r,g,b)
    if(mouseIsPressed){
        
line(pmouseX-5,pmouseY-5,mouseX-5,mouseY-5)
    }
}
function check(){
    classifier.classify(canvas, gotResults)
}
function gotResults(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        ans=(results[0].label).replace("_"," ")
        document.getElementById("drawing").innerHTML=ans;
        document.getElementById("confidence").innerHTML=(Math.round((results[0].confidence)*100))+"%"
       
    }
}

function mouse(){
   
    px=event.clientX
    py=event.clientY

    document.getElementById("follow").style.top=py
    document.getElementById("follow").style.left=px

  

}

function fblack(){
    if(pen==1){
    r=0;
    g=0;
    b=0;
    document.getElementById("black").innerHTML="•"
    document.getElementById("red").innerHTML=""
    document.getElementById("green").innerHTML=""
    document.getElementById("blue").innerHTML=""
    bb=1;
    rr=0;
    gg=0;
    bl=0;

}
}
function fred(){
    if(pen==1){
    r=255;
    g=0;
    b=0;
    document.getElementById("black").innerHTML=""
    document.getElementById("red").innerHTML="•"
    document.getElementById("green").innerHTML=""
    document.getElementById("blue").innerHTML=""
    bb=0;
    rr=1;
    gg=0;
    bl=0;
}

}
function fgreen(){
    if(pen==1){
    r=0;
    g=128;
    b=0;
    document.getElementById("black").innerHTML=""
    document.getElementById("red").innerHTML=""
    document.getElementById("green").innerHTML="•"
    document.getElementById("blue").innerHTML=""
    bb=0;
    rr=0;
    gg=1;
    bl=0;
}
}
function fblue(){
    if(pen==1){
    r=0;
    g=0;
    b=255;
    document.getElementById("black").innerHTML=""
    document.getElementById("red").innerHTML=""
    document.getElementById("green").innerHTML=""
    document.getElementById("blue").innerHTML="•"
    bb=0;
    rr=0;
    gg=0;
    bl=1;
}
}
function eraser(){
    if(pen==1){
    document.getElementById("erase").style.backgroundColor="#002c3a"
    document.getElementById("erase").style.borderColor="#f7f8f3"
    document.getElementById("erase").style.color="#f7f8f3"
    document.getElementById("erase").innerHTML="Back To Pen"
    pen=0
    r=255;
    g=255;
    b=255;
    document.getElementById("thick").innerHTML="Eraser Width"
    }
    else if(pen==0){
        document.getElementById("thick").innerHTML="Pen Width"
        document.getElementById("erase").style.backgroundColor="#f7f8f3"
        document.getElementById("erase").style.borderColor="#002c3a"
        document.getElementById("erase").style.color="#002c3a"
        document.getElementById("erase").innerHTML="Eraser"
        if(bb==1){
            r=0;
            g=0;
            b=0;
        }
        else if(rr==1){
            r=255;
            g=0;
            b=0;
        }
        else if(gg==1){
            r=0;
            g=255;
            b=0;
        }
        else if(bl==1){
            r=0;
            g=0;
            b=255;
        }
    pen=1
        }
}

