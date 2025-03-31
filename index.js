function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(button[onclick="openTab('${tabId}')"]).classList.add('active');
}


function encrypt() {
    const textInput = document.getElementById('textInput').value;
    const shiftValue = parseInt(document.getElementById('shiftValue').value);

    if (isNaN(shiftValue) || shiftValue < 1 || shiftValue > 25) {
        alert("Please enter a valid shift value (1-25).");
        return;
    }

    const encryptedText = encryptText(textInput, shiftValue);
    document.getElementById('encryptedText').textContent = encryptedText;
}

function decrypt() {
    const textInput = document.getElementById('encryptedText').textContent;
    const shiftValue = parseInt(document.getElementById('shiftValue').value);

    if (isNaN(shiftValue) || shiftValue < 1 || shiftValue > 25) {
        alert("Please enter a valid shift value (1-25).");
        return;
    }

    const decryptedText = decryptText(textInput, shiftValue);
    document.getElementById('decryptedText').textContent = decryptedText;
}

function encryptText(text, shift) {
    return text
        .split('')
        .map(char => shiftCharacter(char, shift))
        .join('');
}

function decryptText(text, shift) {
    return text
        .split('')
        .map(char => shiftCharacter(char, -shift))
        .join('');
}

function shiftCharacter(char, shift) {
    const code = char.charCodeAt(0);
    
    if (code >= 65 && code <= 90) { 

        return String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
    } 
    
    if (code >= 97 && code <= 122) { 

        return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
    }
    
    return char; 
}