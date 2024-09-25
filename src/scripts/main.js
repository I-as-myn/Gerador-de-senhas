function generatePassword(event) {
    event.preventDefault();

    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;

    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterPool = '';
    if (includeUppercase) characterPool += upperChars;
    if (includeLowercase) characterPool += lowerChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSpecial) characterPool += specialChars;

    if (characterPool.length === 0) {
        alert('Selecione pelo menos um tipo de caractere.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    document.getElementById('password').value = password;
}

document.getElementById('passwordForm').addEventListener('submit', generatePassword);
document.getElementById('password').style.display = 'block';