async function avrageOfgrades(){
    alert("here is:");
    const response= await fetch("http://api.mathjs.org/v4/");
    const data= await response.json();
    const input=document.getElementById(grades).value;
    console.log(data);
    

    
}