// Link sliders with input fields for real-time update
const loanAmountInput = document.getElementById('loanAmountInput');
const interestRateInput = document.getElementById('interestRateInput');
const loanTermInput = document.getElementById('loanTermInput');

document.getElementById('loanAmount').addEventListener('input', updateCalculator);
document.getElementById('interestRate').addEventListener('input', updateCalculator);
document.getElementById('loanTerm').addEventListener('input', updateCalculator);

function updateCalculator() {
    const amount = parseFloat(document.getElementById('loanAmount').value);
    const rate = parseFloat(document.getElementById('interestRate').value);
    const term = parseFloat(document.getElementById('loanTerm').value);

    const total = amount * (1 + (rate / 100) * term);
    document.getElementById('totalAmount').textContent = `$${total.toFixed(2)}`;

    loanAmountInput.value = amount;
    interestRateInput.value = rate;
    loanTermInput.value = term;
}
