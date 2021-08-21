//-----------------------MEMORY PART-----------------------//

//8BG memory
const memory8GBButton = document.getElementById('8GB-memory-button');
memory8GBButton.addEventListener('click', function(){
    extraMemoryCost('8GBMemory');
    //totalPrice('8GBMemory');
    //grandTotal('8GBMemory');
})

//16GB memory
const memory16GBButton = document.getElementById('16GB-memory-button');
memory16GBButton.addEventListener('click', function(){
    extraMemoryCost('16GBMemory');
    //totalPrice('16GBMemory');
    //grandTotal('16GBMemory');
})

//-----------------------STORAGE PART-----------------------//

//256GB SSD storage
const SSD256GBButton = document.getElementById('256GB-SSD-button');
SSD256GBButton.addEventListener('click', function(){
    SSDCost('256GBStorage');
    //totalPrice('256GBStorage');
    //grandTotal('256GBStorage');
})

//512GB SSD storage
const SSD512GBButton = document.getElementById('512GB-SSD-button');
SSD512GBButton.addEventListener('click', function(){
    SSDCost('512GBStorage');
    //totalPrice('512GBStorage');
    //grandTotal('512GBStorage');
})

//1TB SSD storage
const SSD1TBButton = document.getElementById('1TB-SSD-button');
SSD1TBButton.addEventListener('click', function(){
    SSDCost('1TBStorage');
    //totalPrice('1TBStorage');
    //grandTotal('1TBStorage');
})

//-----------------------DELIVERY PART-----------------------//

//Free delivery
const freeDeliveryButton = document.getElementById('free-delivery');
freeDeliveryButton.addEventListener('click', function(){
    deliveryCost('freeDelivery');
    //totalPrice('freeDelivery');
    //grandTotal('freeDelivery');
})

//Charged delivery
const chargedDeliveryButton = document.getElementById('charged-delivery');
chargedDeliveryButton.addEventListener('click', function(){
    deliveryCost('chargedDelivery');
    //totalPrice('chargedDelivery');
    //grandTotal('chargedDelivery');
})

//-----------------------PROMO PART-----------------------//



//-----------------------ALL THE FUNCTIONS-----------------------//

function extraMemoryCost(type){
    //Memory cost part
    const getMemoryID = document.getElementById('extra-memory-cost');
    const getMemoryText = getMemoryID.innerText;
    const textToAmount = parseInt(getMemoryText);
    //Need to calculate value for 8GB & 16GB 
    if(type == '8GBMemory'){
        getMemoryID.innerText = textToAmount + 0;
    }
    else if(type == '16GBMemory'){
        getMemoryID.innerText = textToAmount + 180;
    }
}

function SSDCost(type){
    //SSD storage cost part
    const getSSDStorageID = document.getElementById('SSD-storage-cost');
    const getSSDStorageText = getSSDStorageID.innerText;
    const textToAmount = parseInt(getSSDStorageText);
    //Need to calculate value for 256GB, 512GB & 1TB
    if(type == '256GBStorage'){
        getSSDStorageID.innerText = textToAmount + 0;
    }
    else if(type == '512GBStorage'){
        getSSDStorageID.innerText = textToAmount + 100;
    }
    else if(type == '1TBStorage'){
        getSSDStorageID.innerText = textToAmount + 180;
    }
}

function deliveryCost(type){
    const getDeliveryID = document.getElementById('delivery-charge');
    const getDeliveryText = getDeliveryID.innerText;
    const textToAmount = parseInt(getDeliveryText);
    //Need to calculate value for Aug 25 & Aug 21 
    if(type == 'freeDelivery'){
        getDeliveryID.innerText = textToAmount + 0;
    }
    else if(type == 'chargedDelivery'){
        getDeliveryID.innerText = textToAmount + 20;
    }
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