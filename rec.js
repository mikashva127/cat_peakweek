async function avrageOfgrades(){
    const input=document.getElementById("grades").value
    const count=input.split('+').length;
    const expression = `(${input}) / ${count}`;
    const encodedExpr = encodeURIComponent(expression);
    const response = await fetch(`https://api.mathjs.org/v4/?expr=${encodedExpr}`);
    const result= await response.text();
    if(result>=80){
        alert("your avrage is: " + result+ ".Great job!,You can be accepted to the major.");
    }
    else{
        alert("Your average is: " + result + ". Keep going — you’re on your way, but this grade isn't enough yet to be accepted into the major. You can do it!");
 
    }
    

    
}
 function otsprogrem(){
    setTimeout(open_popup,5000);
 }
 function open_popup(popup_instructions) {
    var popup = document.getElementById("popup_instructions");
    popup.style.display = "block";
}
function close_popup(popup_instructions) {
    var popup = document.getElementById("popup_instructions");
    popup.style.display = "none";
}
function checkAnswer(){
    var popup = document.getElementById("popup_instructions");
    popup.style.display = "none";
    correct_word="Aliccode";
    choise_input=document.getElementById("choice").value;
    if(choise_input==="Alicecode"||choise_input==="alicecode"||choise_input==="alice code"||choise_input=="Alice code"){
        alert("we got your answer we will get you in Alicecode recommendations page in a few seconds ");
        setTimeout(2000);
        window.location.replace("alicecoderec.html"); 
    }
    if(choise_input==="universty"||choise_input==="Universty"){
        alert("we got your answer we will get you in universty recommendations page in a few seconds ");
        window.location.replace("universtyrec.html"); 
    }
    else{
        alert("We didn't get your answer please try to type again or click on the X to exit");
        setTimeout(open_popup,2000);
    }


     
}
