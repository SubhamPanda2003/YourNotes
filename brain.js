let i=00;
function submit(){
    i++;
    var x = document.getElementById("myTextarea").value;
    let btn = document.getElementById("btn");
    console.log(i);
    let nav=document.getElementById(i);
    nav.innerHTML="<ul><li>"+x+"</li></ul>";
    document.getElementById("myTextarea").value="";
}