document.getElementById('apply-btn').addEventListener('click', function () {
    const previousDiscountSting = document.getElementById('price-tag');
    const previousPrice = previousDiscountSting.innerText;
    const previousDiscount = parseFloat(previousPrice);

    const newDiscountPricecount = previousDiscount - (previousDiscount * .30);
    const newDiscountPrice = newDiscountPricecount.toFixed(2);
    if (newDiscountPrice > 800) {
        previousDiscountSting.innerText = newDiscountPrice;
    }

    const inputField = document.getElementById('input-field');
    inputField.value = '';
})
