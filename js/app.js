document.addEventListener('DOMContentLoaded', function () {

    let textarea = document.getElementById('toEncryptDecrypt');
    let encryptButton = document.getElementById('encrypt');
    let decryptButton = document.getElementById('decrypt');
    let divResults = document.getElementById('result');
    let divResultsDefault = document.getElementById('resultdefault');
    let resultEncriptDecrypt = document.getElementById('resultEncriptDecrypt');


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


    function encryptText(text) {
        let encryptedText = text;

        encryptedText = encryptedText.replace(/a/g, 'ai');
        encryptedText = encryptedText.replace(/e/g, 'enter');
        encryptedText = encryptedText.replace(/i/g, 'imes');
        encryptedText = encryptedText.replace(/o/g, 'ober');
        encryptedText = encryptedText.replace(/u/g, 'ufat');
        return encryptedText;
    }

    function decryptText(encryptedText) {
        let decryptedText = encryptedText;

        decryptedText = decryptedText.replace(/ai/g, 'a');
        decryptedText = decryptedText.replace(/enter/g, 'e');
        decryptedText = decryptedText.replace(/imes/g, 'i');
        decryptedText = decryptedText.replace(/ober/g, 'o');
        decryptedText = decryptedText.replace(/ufat/g, 'u');
        return decryptedText;
    }

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
