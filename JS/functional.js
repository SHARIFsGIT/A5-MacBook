//-----------------------MEMORY PART-----------------------//

//8BG memory
/*
const memory8GBButton = document.getElementById('8GB-memory-button');
memory8GBButton.addEventListener('click', function(){
    extraMemoryCost();
    totalPrice();
    grandTotal();
})
*/
//16GB memory
const memory16GBButton = document.getElementById('16GB-memory-button');
memory16GBButton.addEventListener('click', function(){
    extraMemoryCost();
    totalPrice();
    grandTotal();
})

//-----------------------STORAGE PART-----------------------//

//256GB SSD storage
/*
const SSD256GBButton = document.getElementById('256GB-SSD-button');
SSD256GBButton.addEventListener('click', function(){
    SSDCost();
    totalPrice();
    grandTotal();
})
*/
//512GB SSD storage
const SSD512GBButton = document.getElementById('512GB-SSD-button');
SSD512GBButton.addEventListener('click', function(){
    SSDCost();
    totalPrice();
    grandTotal();
})

//1TB SSD storage
/*
const SSD1TBButton = document.getElementById('1TB-SSD-button');
SSD1TBButton.addEventListener('click', function(){
    SSDCost();
    totalPrice();
    grandTotal();
})
*/
//-----------------------DELIVERY PART-----------------------//

//Free delivery
/*
const freeDeliveryButton = document.getElementById('free-delivery');
freeDeliveryButton.addEventListener('click', function(){
    deliveryCost();
    totalPrice();
    grandTotal();
})
*/
//Charged delivery
const chargedDeliveryButton = document.getElementById('charged-delivery');
chargedDeliveryButton.addEventListener('click', function(){
    deliveryCost();
    totalPrice();
    grandTotal();
})

//-----------------------PROMO PART-----------------------//



//-----------------------ALL THE FUNCTIONS-----------------------//

function extraMemoryCost(){
    //Memory cost part
    const getMemoryID = document.getElementById('extra-memory-cost');
    const getMemoryText = getMemoryID.innerText;
    const textToAmount = parseInt(getMemoryText);
    //Need to calculate value for 8GB & 16GB 
    const totalMemoryAmount = textToAmount + 180;
    getMemoryID.innerText = totalMemoryAmount;
}

function SSDCost(){
    //SSD storage cost part
    const getSSDStorageID = document.getElementById('SSD-storage-cost');
    const getSSDStorageText = getSSDStorageID.innerText;
    const textToAmount = parseInt(getSSDStorageText);
    //Need to calculate value for 256GB, 512GB & 1TB 
    const totalStorageAmount = textToAmount + 100;
    getSSDStorageID.innerText = totalStorageAmount;
}

function deliveryCost(){
    const getDeliveryID = document.getElementById('delivery-charge');
    const getDeliveryText = getDeliveryID.innerText;
    const textToAmount = parseInt(getDeliveryText);
    //Need to calculate value for Aug 25 & Aug 21 
    const totalDeliveryAmount = textToAmount + 20;
    getDeliveryID.innerText = totalDeliveryAmount;
}

function totalPrice(){
    //Total price part
    const getTotalPriceID = document.getElementById('total-price');
    const getPriceText = getTotalPriceID.innerText;
    const textToAmount = parseInt(getPriceText);
    //Need to calculate value for Memory (8GB & 16GB) + Storage (256GB, 512GB & 1TB) + Delivery (Free & Charge)
    const totalAmount = textToAmount + 180;
    getTotalPriceID.innerText = totalAmount;
}

function grandTotal(){
    //Total part
    const getGrandTotalID = document.getElementById('grand-total');
    const getGrandTotalText = getGrandTotalID.innerText;
    const textToAmount = parseInt(getGrandTotalText);
    //Need to calculate value for Memory (8GB & 16GB) + Storage (256GB, 512GB & 1TB) + Delivery (Free & Charge)
    const grandAmount = textToAmount + 180;
    getGrandTotalID.innerText = grandAmount;
}