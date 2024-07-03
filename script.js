/* js code */

function changeImage(imageName)
{
    const mainImage = document.getElementById('perfum-img');
    mainImage.src = imageName;
}   
function increment()
{
    const quantityElement = document.getElementById("quantity");
    const quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = quantity + 1;
    if(quantity > 4){
        alert("Quantity cannot be greater than 4");
        quantityElement.innerText = quantity - 1;
        return;
    }
}
function decrement()
{
    const quantityElement = document.getElementById("quantity");
    const quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = quantity - 1;
    if(quantity < 1){
        alert("Quantity cannot be less than 1");
        quantityElement.innerText = quantity + 1;
        return;
    }
}