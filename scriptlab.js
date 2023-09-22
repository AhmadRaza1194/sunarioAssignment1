var totalprice=0;
function calculatePrice() {
    const selectedFruit = document.getElementById("fru").value;
    let price = 0;

    switch (selectedFruit) {
        case 'Apple':
            {
            price = 1.0;
            break;
    }
        case 'Orange':
            {
            price = 1.2; 
            break;
        }
        case 'Banana':
            {
            price = 0.8; 
            break;
        }
        case 'Grape':
            {
            price = 2.5; 
            break;
        }
        case 'Mango':
            {
            price = 1.5; 
            break;
        }
        default:
            {
            price = 0;
        }
    }
    if(selectedFruit == "Apple"){
           price=price-(price*10/100);
    }
    else if(selectedFruit=="Banana")
    {
        price=price-(price*20/100);
    }
      else{
        price;
      }
      
    const resultElement = document.getElementById("result");
    let HTML;
    if (price > 0) {
        HTML = "<tr><td colspan='2'>The price of "+ selectedFruit + " is:</td><td>"+price+"</td></tr>";
    } else {
        HTML = "<tr><td colspan='2'>Sorry, we don't have a price for: </td><td>"+selectedFruit+"</td></tr>";
    }
    resultElement.insertAdjacentHTML('beforeend',HTML);
    totalprice+=price;
    document.getElementById('totalprice').innerText=totalprice;
}
function reset(){
    totalprice=0;
    document.getElementById('totalprice').innerText=totalprice;
    document.getElementById("result").innerHTML="";
}