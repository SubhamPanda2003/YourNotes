let i=00;
let textToSave="";
function submit(){
    i++;
    var x = document.getElementById("myTextarea").value;
    let btn = document.getElementById("btn");
    console.log(i);
    let nav=document.getElementById(i);
    nav.innerHTML="<ul><li>"+x+"</li></ul>";
    
    textToSave = textToSave+" "+i+">>"+x;
    
    document.getElementById("myTextarea").value="";

}
function download(){
    let btn = document.getElementById("btn1");


var hiddenElement = document.createElement('a');

hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
hiddenElement.target = '_blank';
hiddenElement.download = 'YourNotes.txt';
hiddenElement.click();
}
