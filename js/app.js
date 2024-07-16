document.addEventListener('DOMContentLoaded', function () {

    //Variables
    let textarea = document.getElementById('toEncryptDecrypt');
    let encryptButton = document.getElementById('encrypt');
    let decryptButton = document.getElementById('decrypt');
    let divResults = document.getElementById('result');
    let divResultsDefault = document.getElementById('resultdefault');
    let resultEncriptDecrypt = document.getElementById('resultEncriptDecrypt');


    /**
     * Maneja el evento de clic en el botón de encriptar.
     * Realiza la encriptación del texto ingresado, muestra el resultado y oculta el contenido predeterminado.
     */
    encryptButton.addEventListener('click', function () {
        if (!textarea.value.trim()) {
            return
        }

        var inputValue = textarea.value.trim();
        divResultsDefault.classList.add('isOcult');
        divResults.classList.remove('isOcult');
        let textEncrypt = encryptText(inputValue);
        resultEncriptDecrypt.textContent = textEncrypt;
        textarea.value = '';

    });

    /**
     * Maneja el evento de clic en el botón de desencriptar.
     * Realiza la desencriptación del texto ingresado, muestra el resultado y oculta el contenido predeterminado.
     */
    decryptButton.addEventListener('click', function () {
        if (!textarea.value.trim()) {
            return
        }

        let inputValue = textarea.value.trim();
        divResultsDefault.classList.add('isOcult');
        divResults.classList.remove('isOcult');
        let textDecrypt = decryptText(inputValue);
        resultEncriptDecrypt.textContent = textDecrypt;
        textarea.value = '';
    });


    /**
     * Encripta un texto según las reglas dadas.
     * 
     * @param {string} text - El texto que se va a encriptar.
     * @returns {string} - El texto encriptado.
     */
    function encryptText(text) {
        let encryptedText = text;

        encryptedText = encryptedText.replace(/e/g, 'enter');
        encryptedText = encryptedText.replace(/i/g, 'imes');
        encryptedText = encryptedText.replace(/a/g, 'ai');
        encryptedText = encryptedText.replace(/o/g, 'ober');
        encryptedText = encryptedText.replace(/u/g, 'ufat');
        return encryptedText;
    }

    /**
     * Desencripta un texto encriptado según las reglas dadas.
     * 
     * @param {string} encryptedText - El texto encriptado que se va a desencriptar.
     * @returns {string} - El texto desencriptado.
     */
    function decryptText(encryptedText) {
        let decryptedText = encryptedText;

        decryptedText = decryptedText.replace(/enter/g, 'e');
        decryptedText = decryptedText.replace(/imes/g, 'i');
        decryptedText = decryptedText.replace(/ai/g, 'a');
        decryptedText = decryptedText.replace(/ober/g, 'o');
        decryptedText = decryptedText.replace(/ufat/g, 'u');
        return decryptedText;
    }


    /**
     * Maneja el evento de clic en el botón de copiar, copiando el texto al portapapeles.
     */
    copyButton.addEventListener('click', function () {
        var textoCopiar = resultEncriptDecrypt.textContent;

        navigator.clipboard.writeText(textoCopiar)
            .then(function () {
                alert('Texto copiado al portapapeles');
            })
            .catch(function (err) {
                alert('No se pudo copiar el texto al portapapeles', err);
            });
    });


});