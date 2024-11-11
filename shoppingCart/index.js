function amt()
{
    let qty=parseInt(document.getElementById("quantity").value);
    let price=parseInt(document.getElementById("price").value);
    let amount=qty*price;
    document.getElementById("amount").value=amount;
}
var cart=[];
function addItem()
{
    let name=document.getElementById("product").value;
    let qty=parseInt(document.getElementById("quantity").value);
    let amount=parseInt(document.getElementById("amount").value);

    let price=parseInt(document.getElementById("price").value);
    let product={name:name,qty:qty,price:price,amount:amount};
    cart.push(product);
    let cart_rows="";
    for(let prod of cart)
    {
        cart_rows=cart_rows+ `<tr>
        <td>${prod.name}</td>
        <td>${prod.qty}</td>
        <td>${prod.price}</td>
        <td>${prod.amount}</td>
        </tr>

        `

    }
    let totalAmount=cart.reduce((sum,prod)=>{
        return sum+ parseInt(prod.amount);
    },0);
    document.getElementById("item").innerHTML=cart_rows;
    document.getElementById("tamt").innerHTML=`${totalAmount}`;





}