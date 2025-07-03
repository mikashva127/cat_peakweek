function cat1(){
    alert("thank u 4 ansering,we are working out your answers🤗");
    setTimeout(chackanscomp,2000);
    
}
function chackanscomp(){
   let ans1=parseInt(document.getElementById("ans1").value);
   let ans2=parseInt(document.getElementById("ans2").value);
   let ans3=parseInt(document.getElementById("ans3").value);
   let ans4=parseInt(document.getElementById("ans4").value);
   let sum=ans1+ans2+ans3+ans4;
   if(sum >=19&& ans4>=4 && ans4<=6){
    alert("You’re clearly into it- sounds like a perfect match");
   }
   else{
    alert("Thanks,Based on your answers,maybe explore a bit more to find your best fit");
   }
}
function cat2(){
    alert("thank u 4 ansering,we are working out your answers🤗");
    setTimeout(checkAnswerpys,2000);
}
function checkAnswerpys(){
    let ans1=parseInt(document.getElementById("ans5").value);
    let ans2=parseInt(document.getElementById("ans6").value);
    let ans3=parseInt(document.getElementById("ans7").value);
    let ans4=parseInt(document.getElementById("ans8").value);
    let sum=ans1+ans2+ans3+ans4;
    if(sum >=19&& ans4>=4 && ans4<=6){
        alert("You’re clearly into it- sounds like a perfect match");
       }
    else{
        alert("Thanks,Based on your answers,maybe explore a bit more to find your best fit");
       }


}

