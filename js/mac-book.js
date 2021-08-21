// memory area 
const memoryFirstPrice = document.getElementById('memory-8gb');
const memorysecondPrice = document.getElementById('memory-16gb');

const extraMemory =  document.getElementById('extra-memory');

memoryFirstPrice.addEventListener('click', function(){
    extraMemory.innerText = "0";
    updateTotal()
})
memorysecondPrice.addEventListener('click', function(){
    extraMemory.innerText = "180";
    updateTotal()
})  


//storage -area

const  firstStorage = document.getElementById('storage-256gb');
const  secondStorage = document.getElementById('storage-512gb');
const  thirdStorage = document.getElementById('storage-1tb');

const storageExtra = document.getElementById('extra-storage');

firstStorage.addEventListener('click', function(){
    storageExtra.innerText = "0";
    updateTotal()
})
secondStorage.addEventListener('click', function(){
    storageExtra.innerText = "100";
    updateTotal()
})
thirdStorage.addEventListener('click', function(){
    storageExtra.innerText = "180";
    updateTotal()
})

//delivary - cost 
const  freeExpress = document.getElementById('delivery-free');
const  moneyExpress = document.getElementById('delivery-money');

const extraDeliveryCost = document.getElementById('extra-delivery');

freeExpress.addEventListener('click', function(){
    extraDeliveryCost.innerText = "0";
    updateTotal()
})
moneyExpress.addEventListener('click', function(){
    extraDeliveryCost.innerText = "20";
    updateTotal()
})

 //  total cost 
const tableBestMoney = document.getElementById("best-price")
const totalCost = document.getElementById('totalMoney')
//promo Total cost
const promoTotal = document.getElementById('promoDiscount');

function updateTotal(){
    const memoryPrice = parseInt(extraMemory.innerText);
    const storagePrice = parseInt(storageExtra.innerText);
    const deliveryPrice = parseInt(extraDeliveryCost.innerText);
    const topPrice = parseInt(tableBestMoney.innerText);
    
    
    
    const Total = memoryPrice + storagePrice + deliveryPrice + topPrice;
    totalCost.innerText = Total;
    promoTotal.innerText = Total;

} 

//promo function
function totalPrice(){
    const memoryPrice = parseInt(extraMemory.innerText);
    const storagePrice = parseInt(storageExtra.innerText);
    const deliveryPrice = parseInt(extraDeliveryCost.innerText);
    const topPrice = parseInt(tableBestMoney.innerText);
    
    
    const total = memoryPrice + storagePrice + deliveryPrice + topPrice;
    
    return total;

} 

//promo code add
document.getElementById('promo-submit').addEventListener
('click', function(){
     
   const promoField = document.getElementById('promo-code');
   const usePromocode = promoField.value;
  
   
//    console.log(usePromocode);
    
    if(usePromocode == 'stevekaku'){
        //20 % discount
      const promoMulti = totalPrice() *20;
      const promoDivision = promoMulti /100;
      const promoPrice = totalPrice() - promoDivision;
        promoTotal.innerText = promoPrice;
        // console.log(promoTotal);
    }
});

