function convertTemperature() {
    const tempInput = document.getElementById('temperature').value;
    const scale = document.getElementById('scale').value;
    let result;

    // Validate input
    if (isNaN(tempInput) || tempInput === '') {
        result = 'Please enter a valid number.';
    } else {
        const temp = parseFloat(tempInput);
        switch (scale) {
            case 'C':
                result = `${(temp * 9/5) + 32} °F`; // Celsius to Fahrenheit
                result += `, ${temp + 273.15} K`; // Celsius to Kelvin
                break;
            case 'F':
                result = `${(temp - 32) * 5/9} °C`; // Fahrenheit to Celsius
                result += `, ${((temp - 32) * 5/9) + 273.15} K`; // Fahrenheit to Kelvin
                break;
            case 'K':
                result = `${(temp - 273.15) * 9/5 + 32} °F`; // Kelvin to Fahrenheit
                result += `, ${temp - 273.15} °C`; // Kelvin to Celsius
                break;
            default:
                result = 'Invalid scale selected.';
        }
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}