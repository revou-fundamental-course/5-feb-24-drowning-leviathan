function celcToFahrForm() {
    document.getElementById("container").innerHTML = `
        <form id = "C-to-F">
            <p id = "instructions">Masukkan suhu derajat Celcius (°C) ke kotak di bawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (°F)</p>
            <br>
            <label for = "inputCelcius">Celcius (°C)</label>
            <br>
            <input class = "input-number" type = "number" id = "input-celcius" name = "inputCelcius">
            <br>
            <button type = "button" id = "convert-C-to-F" onclick = "celciusToFahrenheit()">Konversi</button>
            <button type = "reset" id = "reset-button">Reset</button>
            <button type = "button" id = "reverse-button" onclick = "fahrenheitToCelcius()">Reverse</button>
            <br>
            <br>
            <label for = "inputFahrenheit">Fahrenheit (°F)</label>
            <br>
            <input class = "input-number" type = "number" id = "input-fahrenheit" name = "inputFahrenheit">
            <br>
            <br>
            <label for = "caraKalkulasi">Cara Kalkulasi:</label>
            <br>
            <textarea id = "calculation-process" name = "caraKalkulasi" readonly></textarea>
            <br>
            <p id = "ubah-jadi-F-ke-C" class = "pseudo-link" onclick="fahrToCelcForm()">Fahrenheit ke Celcius</p>
        </form>
    `;

    const celcius = document.getElementById("input-celcius");
    const fahrenheit = document.getElementById("input-fahrenheit");
    const calcSteps = document.getElementById("calculation-process");

    function validateInteger(userInput) {
        const integerRegex = /^(?!-0?(\.0+)?$)-?(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/;
        return integerRegex.test(userInput);
    }
    
    celcius.addEventListener("input", function() {
        const inputValue = celcius.value;
        if (validateInteger(inputValue)) {
            document.getElementById("convert-C-to-F").disabled = false;
        } else {
            document.getElementById("convert-C-to-F").disabled = true;
        }
    })
    
    fahrenheit.addEventListener("input", function() {
        const inputValue = fahrenheit.value;
        if (validateInteger(inputValue)) {
            document.getElementById("reverse-button").disabled = false;
        } else {
            document.getElementById("reverse-button").disabled = true;
        }
    })
    
    window.celciusToFahrenheit = function() {
        var fahrenheitConvert = (celcius.value * 1.8) + 32;
        fahrenheit.value = fahrenheitConvert;
        var calcProcess = celcius.value + "°C * (9/5) + 32 = " + fahrenheitConvert;
        calcSteps.value = calcProcess;
    }
    
    window.fahrenheitToCelcius = function() {
        var celciusConvert = ((fahrenheit.value - 32) / 1.8);
        celcius.value = celciusConvert;
        var calcProcess = "(" + fahrenheit.value + "°F - 32) * (5/9) = " + celciusConvert;
        calcSteps.value = calcProcess;
    }
}

function fahrToCelcForm() {
    document.getElementById("container").innerHTML = `
        <form id = "F-to-C">
            <p id = "instructions">Masukkan suhu derajat Fahrenheit (°F) ke kotak di bawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Celcius (°C)</p>
            <br>
            <label for = "inputFahrenheit">Fahrenheit (°F)</label>
            <br>
            <input class = "input-number" type = "number" id = "input-fahrenheit" name = "inputFahrenheit">
            <br>
            <button type = "button" id = "convert-F-to-C" onclick = "fahrenheitToCelcius()">Konversi</button>
            <button type = "reset" id = "reset-button">Reset</button>
            <button type = "button" id = "reverse-button" onclick = "celciusToFahrenheit()">Reverse</button>
            <br>
            <br>
            <label for = "inputCelcius">Celcius (°C)</label>
            <br>
            <input class = "input-number" type = "number" id = "input-celcius" name = "inputCelcius">
            <br>
            <br>
            <label for = "caraKalkulasi">Cara Kalkulasi:</label>
            <br>
            <textarea id = "calculation-process" name = "caraKalkulasi" readonly></textarea>
            <br>
            <p id = "ubah-jadi-C-ke-F" class = "pseudo-link" onclick="celcToFahrForm()">Celcius ke Fahrenheit</p>
        </form>
    `;
    
    const celcius = document.getElementById("input-celcius");
    const fahrenheit = document.getElementById("input-fahrenheit");
    const calcSteps = document.getElementById("calculation-process");
     
    function validateInteger(userInput) {
        const integerRegex = /^(?!-0?(\.0+)?$)-?(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/;
        return integerRegex.test(userInput);
    }
    
    celcius.addEventListener("input", function() {
        const inputValue = celcius.value;
        if (validateInteger(inputValue)) {
            document.getElementById("convert-F-to-C").disabled = false;
        } else {
            document.getElementById("convert-F-to-C").disabled = true;
        }
    })
    
    fahrenheit.addEventListener("input", function() {
        const inputValue = fahrenheit.value;
        if (validateInteger(inputValue)) {
            document.getElementById("reverse-button").disabled = false;
        } else {
            document.getElementById("reverse-button").disabled = true;
        }
    })
    
    window.celciusToFahrenheit = function() {
        var fahrenheitConvert = (celcius.value * 1.8) + 32;
        fahrenheit.value = fahrenheitConvert;
        var calcProcess = celcius.value + "°C * (9/5) + 32 = " + fahrenheitConvert;
        calcSteps.value = calcProcess;
    }
    
    window.fahrenheitToCelcius = function() {
        var celciusConvert = ((fahrenheit.value - 32) / 1.8);
        celcius.value = celciusConvert;
        var calcProcess = "(" + fahrenheit.value + "°F - 32) * (5/9) = " + celciusConvert;
        calcSteps.value = calcProcess;
    }
}

celcToFahrForm();