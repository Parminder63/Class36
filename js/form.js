class Form{
constructor(){}

display(){

var title=createElement("h1");
title.html("Car Racing Game");
title.position(630,100);


var text= createInput("name");
text.position(630,200);


var play= createButton("PLAY");
play.position(700,400);

play.mousePressed( function(){
text.hide();
play.hide();

var name= text.value();
var greeting= createElement("h4");
greeting.html("Hello " + name);
greeting.position(730,450);


})








}

}