const rates = {
    USD: { EUR: 0.85, GBP: 0.75, JPY: 110.53 },
    EUR: { USD: 1.18, GBP: 0.88, JPY: 130.02 },
    GBP: { USD: 1.33, EUR: 1.14, JPY: 148.60 },
    JPY: { USD: 0.0090, EUR: 0.0077, GBP: 0.0067 }
};

const convert = () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');

    errorDiv.innerText = '';
    resultDiv.innerText = '';

    if (isNaN(amount) || amount <= 0) {
        errorDiv.innerText = 'Entrée invalide seulement des chiffres et plus de 0.';
        return;
    }

    if (!rates[fromCurrency] || !rates[fromCurrency][toCurrency]) {
        errorDiv.innerText = 'Erreur de devise.';
        return;
    }

    const result = amount * rates[fromCurrency][toCurrency];
    resultDiv.innerText = `Montant converti : ${result.toFixed(2)} ${toCurrency}`;
}
