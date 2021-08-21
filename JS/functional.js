//-----------------------MEMORY PART-----------------------//

//8BG memory
document.getElementById('8GB-memory-button').addEventListener('click', function(){
    memoryTotalPrice('8GBMemory');
})

//16GB memory
document.getElementById('16GB-memory-button').addEventListener('click', function(){
    memoryTotalPrice('16GBMemory');
})

//-----------------------STORAGE PART-----------------------//

//256GB SSD storage
document.getElementById('256GB-SSD-button').addEventListener('click', function(){
    SSDTotalPrice('256GBStorage');
})

//512GB SSD storage
document.getElementById('512GB-SSD-button').addEventListener('click', function(){
    SSDTotalPrice('512GBStorage');
})

//1TB SSD storage
document.getElementById('1TB-SSD-button').addEventListener('click', function(){
    SSDTotalPrice('1TBStorage');
})

//-----------------------DELIVERY PART-----------------------//

//Free delivery
document.getElementById('free-delivery').addEventListener('click', function(){
    deliveryTotalCost('freeDelivery');
})

//Charged delivery
document.getElementById('charged-delivery').addEventListener('click', function(){
    deliveryTotalCost('chargedDelivery');
})

//-----------------------PROMO PART-----------------------//

const promoButton = document.getElementById('promo-button').addEventListener('click',function(){
    const getPromoInput = document.getElementById('promo-input');
    const getPromoInputValue = getPromoInput.value.toLowerCase() ;

    const getGrandTotalID = document.getElementById('grand-total');
    const getGrandTotalText = getGrandTotalID.innerText;
    const textToAmount = parseInt(getGrandTotalText);
    if(getPromoInputValue == 'stevekaku')
    {
        const grandAmount = textToAmount -(textToAmount * 0.2);    
        getGrandTotalID.innerText = grandAmount;
        getPromoInput.value= '';
        document.getElementById('promo-success').style.display = 'block';
    }
    else{
        alert ("You don't have any PROMO code. Please try again later.");
    }
})

//-----------------------ALL THE FUNCTIONS-----------------------//

function extraMemoryCost(type){
    //Memory cost part
    const getMemoryID = document.getElementById('extra-memory-cost');
    const getMemoryText = getMemoryID.innerText;
    const textToAmount = parseInt(getMemoryText);
    //Calculation for 8GB & 16GB 
    if(type == '8GBMemory'){
        getMemoryID.innerText = 0;
        const memory8GBPrice = parseInt(getMemoryID.innerText);
        return memory8GBPrice;
        
    }
    else if(type == '16GBMemory'){
        getMemoryID.innerText = 180;
        const memory16GBPrice = parseInt(getMemoryID.innerText);
        return memory16GBPrice;
    }
}

function SSDCost(type){
    //SSD storage cost part
    const getSSDStorageID = document.getElementById('SSD-storage-cost');
    const getSSDStorageText = getSSDStorageID.innerText;
    const textToAmount = parseInt(getSSDStorageText);
    //Calculation for 256GB, 512GB & 1TB
    if(type == '256GBStorage'){
        getSSDStorageID.innerText = 0;
        const SSD256GBPrice = parseInt(getSSDStorageID.innerText);
        return SSD256GBPrice;
    }
    else if(type == '512GBStorage'){
        getSSDStorageID.innerText = 100;
        const SSD512GBPrice = parseInt(getSSDStorageID.innerText);
        return SSD512GBPrice;
    }
    else if(type == '1TBStorage'){
        getSSDStorageID.innerText = 180;
        const SSD1TBPrice = parseInt(getSSDStorageID.innerText);
        return SSD1TBPrice;
    }
}

function deliveryCost(type){
    const getDeliveryID = document.getElementById('delivery-charge');
    const getDeliveryText = getDeliveryID.innerText;
    const textToAmount = parseInt(getDeliveryText);
    //Calculation for Aug 25 & Aug 21 
    if(type == 'freeDelivery'){
        getDeliveryID.innerText = 0;
        const freeCost = parseInt(getDeliveryID.innerText);
        return freeCost;
    }
    else if(type == 'chargedDelivery'){
        getDeliveryID.innerText = 20;
        const chargedCost = parseInt(getDeliveryID.innerText);
        return chargedCost;
    }
}

function memoryTotalPrice(type1){
    //Best Price Part 
    const getBestPrice = document.getElementById('base-price');
    const bestPriceAmount = parseInt(getBestPrice.innerText);
    //SSD storage part
    const getSSDStorageID = document.getElementById('SSD-storage-cost');
    //Delivery cost part
    const getDeliveryID = document.getElementById('delivery-charge');
    //Total price part
    const getTotalPriceID = document.getElementById('total-price');
    //Total price calculation
    const totalAmount = bestPriceAmount + extraMemoryCost(type1)+ parseInt(getSSDStorageID.innerText)+ parseInt(getDeliveryID.innerText) ;
    getTotalPriceID.innerText = totalAmount;
    //Grand Total part
    const getGrandTotalID = document.getElementById('grand-total');
    //Grand total calculation
    getGrandTotalID.innerText = totalAmount;
}

function SSDTotalPrice(type1){
    //Best Price Part 
    const getBestPrice = document.getElementById('base-price');
    const bestPriceAmount = parseInt(getBestPrice.innerText);
    //Memory cost part
    const getMemoryID = document.getElementById('extra-memory-cost');
    //Delivery cost part
    const getDeliveryID = document.getElementById('delivery-charge');
    //Total price part
    const getTotalPriceID = document.getElementById('total-price');
    //Total price calculation
    const totalAmount = bestPriceAmount + parseInt(getMemoryID.innerText) + SSDCost(type1) + parseInt(getDeliveryID.innerText);
    getTotalPriceID.innerText = totalAmount;
    //Grand total part
    const getGrandTotalID = document.getElementById('grand-total');
    //Grand total calculation
    getGrandTotalID.innerText = totalAmount;
}

function deliveryTotalCost(type1){
    //Best Price Part 
    const getBestPrice = document.getElementById('base-price');
    const bestPriceAmount = parseInt(getBestPrice.innerText);
    //Memory price part
    const getMemoryID = document.getElementById('extra-memory-cost');
    //SSD storage part
    const getSSDStorageID = document.getElementById('SSD-storage-cost');
    //Total price part
    const getTotalPriceID = document.getElementById('total-price');
    //Total price calculation
    const totalAmount = bestPriceAmount +parseInt(getMemoryID.innerText) + parseInt(getSSDStorageID.innerText) + deliveryCost(type1);
    getTotalPriceID.innerText = totalAmount;
    //Grand total part
    const getGrandTotalID = document.getElementById('grand-total');
    //Grand total calculation
    getGrandTotalID.innerText = totalAmount;
}