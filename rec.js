async function avrageOfgrades(){
    alert("here is:");
    const response= await fetch("http://api.mathjs.org/v4/");
    const data= await response.json();
    const input=document.getElementById(grades).value;
    console.log(data);
    

    
}
 function otsprogrem(){
    setTimeout(open_popup,5000);
 }
 function open_popup(popup_instructions) {
    var popup = document.getElementById("popup_instructions");
    popup.style.display = "block";
}
function close_popup(popup_instructions) {
    var popup = document.getElementById("popup_instructions");;
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
        window.location.replace("aliceoderec.html"); 
    }
    if(choise_input==="universty"||choise_input==="Universty"){
        alert("we got your answer we will get you in universty recommendations page in a few seconds ");
        window.location.replace("universtyrec.html"); 
    }
    else{
        alert("We didn't get your answer please try to type again");
        setTimeout(open_popup,2000);
    }


     
}
