// Função para criptografar o texto
function encryptText() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('output-text').value = encryptedText;
}

// Função para descriptografar o texto
function decryptText() {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('output-text').value = decryptedText;
}

// Função para copiar o texto para a área de transferência
function copyToClipboard() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}
