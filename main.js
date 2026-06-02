 const lowerCountEL = document.getElementById('lowercount');                                      
 const addCountEL = document.getElementById('addcount');                                      
 const counterEL = document.getElementById('counter');                                      
 const resetEL = document.getElementById('reset');                                      
 const initialEL = document.getElementById('initial');                                      
 

 let count = 0;


 lowerCountEL.addEventListener("click", function(){
    count--;
    counterEL.innerHTML = count;
 });


 addCountEL.addEventListener("click", function(){
    count++;
    counterEL.innerHTML = count;
 });


 resetEL.addEventListener("click", function(){
    count = 0;
    counterEL.innerHTML = count;
 });


 initialEL.addEventListener('click',function(){
    count= document.getElementById('init').value;
    counterEL.textContent = `${count}`;
 }) 