window.onload= function(){
    document.getElementById("bling").onchange= blingchecked;
    document.getElementById("decorate").onclick= timerFont;
    document.getElementById("igpay").onclick=transalteText;
}

function buttonclicked() {
   let font= document.getElementById("textEditor");
   
   let prevFont= window.getComputedStyle(font,null).getPropertyValue("font-size");
   font.style.fontSize=parseInt(prevFont)+2+"pt";
}

function blingchecked(){
   let checking=document.getElementById("textEditor");
   if(this.checked){
       
       checking.style.color="green";
       checking.style.textDecoration="underline";
       checking.style.background=setBackgroundImage();
       checking.style.fontWeight="bold";
   }
   else {
       checking.style.fontWeight="normal";
       checking.style.textDecoration="";
       checking.style.background=document.body.style.backgroundImage="";
       checking.style.color="black";
   }
}
function setBackgroundImage(){
    document.body.style.backgroundImage="url('background.png')";
}
let timer = null;
function timerFont() {
    if(timer == null){
        setInterval(buttonclicked,500);
    }
    else{
        clearInterval(timer);
        timer = null;
    }
}

function transalteText(){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";
    let text= document.getElementById("textEditor").value;

    if (vowels.indexOf(text[0]) > -1) {
        newStr = text + "way";
        return newStr;
    } else {
        let firstMatch = text.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = text.substring(vowel) + text.substring(0, vowel) + "ay";
        return newStr;
    }
}