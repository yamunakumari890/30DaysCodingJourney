let count = 0;

 function increase(){
 count++;
 document.getElementById("count").innerHTML = count;
 updateColor();
 }

 function decrease(){
  count--;
  document.getElementById("count").innerHTML = count;
  updateColor();
 }

 function reset(){
  count = 0;
  document.getElementById("count").innerHTML = count;
  updateColor();
 }

 function updateColor(){

 if(count > 0){

    document.getElementById("count").style.color = "darkgreen";

 }

 else if(count < 0){
   
  document.getElementById("count").style.color = "red";
 }

 else{
  document.getElementById("count").style.color = "blue"
 }
}