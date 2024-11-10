// Initialize AOS for scroll animations
AOS.init();

// Loan Calculator Script
function updateLoanAmount(value) {
    document.getElementById('loanAmountDisplay').value = "$" + value;
}

function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseInt(document.getElementById('loanTerm').value);

    const monthlyInterest = interestRate / 12;
    const payments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -payments));

    document.getElementById('loanResult').innerText = "Monthly Payment: $" + monthlyPayment.toFixed(2);
}

// Interest Calculator Script
function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseInt(document.getElementById('time').value);

    const interest = principal * rate * time;

    document.getElementById('interestResult').innerText = "Total Interest: $" + interest.toFixed(2);
}
