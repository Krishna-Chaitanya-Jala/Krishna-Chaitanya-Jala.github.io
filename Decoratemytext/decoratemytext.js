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

function IgpayAtinlay() {
    var caseText = document.getElementById("textEditor").value;
    var splitWords = caseText.split(" "); //to treat each word separatedly
    var vowelRegExp = '^[aieouAIEOU].*'; //RegExp case for words starting with vowel


    for (var i = 0; i < splitWords.length; i++) {
        //if word is single letter or starts with vowel is the same case
        if (splitWords[i].length === 1 || splitWords[i].match(vowelRegExp)) {
            splitWords[i] = splitWords[i].concat("ay");
        }
        //if word does not start with vowel (could be number, symbol)
        else {
            splitWords[i] = splitWords[i].substring(1).concat(splitWords[i].charAt(0).concat("ay"));
        }
    }
    document.getElementById("textEditor").value = splitWords.join(" "); //output and replace
}