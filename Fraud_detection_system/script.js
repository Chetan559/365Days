document.getElementById('transaction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect transaction details from the form
    const transactionAmount = document.getElementById('transaction-amount').value;
    const transactionType = document.getElementById('transaction-type').value;
    const transactionDate = document.getElementById('transaction-date').value;

    // Create a transaction object
    const transaction = {
        amount: transactionAmount,
        type: transactionType,
        date: transactionDate
    };

    // Use a machine learning algorithm to analyze the transaction and determine if it is fraudulent
    // This would typically involve a complex process using historical transaction data, but for the purposes of this example, we will simply assume that transactions over $1000 are fraudulent
    let result = 'Transaction Analyzed: ';
    if (transaction.amount > 1000) {
        result += '<span style="color: red;">Fraudulent</span>';
    } else {
        result += '<span style="color: green;">Legitimate</span>';
    }

    // Display the result on the page
    document.getElementById('result').innerHTML = result;
});