
document.getElementById('input-field').addEventListener('keyup', function (event) {
    const inputField = document.getElementById('input-field')
    const valuOfinput = inputField.value;
    const applyButton = document.getElementById('apply-btn');
    if (valuOfinput === 'DOM') {
        applyButton.removeAttribute('disabled')
    }
    else {
        applyButton.setAttribute('disabled', true)
    }
    // inputField.value = "";
})

