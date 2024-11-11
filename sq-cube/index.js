
function square()
{
    let num=parseInt(document.getElementById("number").value);
    let res=num*num;
   
    document.getElementById("display").innerHTML=res;
    document.getElementById("number").value="";
    document.getElementById("number").focus();

}
function cube()
{
    let num=parseInt(document.getElementById("number").value);
    let res=num*num*num;
    
    document.getElementById("display").innerHTML=res;
    document.getElementById("number").value="";
    document.getElementById("number").focus();

}
