document.getElementById('temperatureInput').addEventListener('input', convertTemperature);
document.getElementById('unitSelect').addEventListener('change', convertTemperature);

function convertTemperature() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    let result = '';

    if (tempInput === '') {
        result = 'Please enter a valid temperature.';
    } else {
        const tempValue = parseFloat(tempInput);
        if (unit === 'celsius') {
            result = ${tempValue}°C = ${(tempValue * 9/5 + 32).toFixed(2)}°F;
        } else {
            result = ${tempValue}°F = ${((tempValue - 32) * 5/9).toFixed(2)}°C;
        }
    }

    document.getElementById('result').textContent = result;
}