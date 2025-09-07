// Replace this with the Invoke URL you copied from API Gateway
const apiUrl = 'https://avzyuu92kg.execute-api.us-west-1.amazonaws.com/prod/convert';

async function convertCurrency() {
    const usdInput = document.getElementById('usd-input');
    const resultDiv = document.getElementById('result');
    const usdAmount = parseFloat(usdInput.value);

    if (isNaN(usdAmount)) {
        resultDiv.innerText = 'Please enter a valid number.';
        return;
    }
    
    resultDiv.innerText = 'Converting...';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usd: usdAmount })
        });

        const data = await response.json();

        if (response.ok) {
            resultDiv.innerText = `Result: £${data.gbp}`;
        } else {
            resultDiv.innerText = `Error: ${data.error}`;
        }
    } catch (error) {
        resultDiv.innerText = 'An error occurred. Please try again.';
        console.error('Fetch error:', error);
    }
}
