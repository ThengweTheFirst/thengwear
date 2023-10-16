// checkout.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("checkout-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const zip = document.getElementById("zip").value;
        const payment = document.getElementById("payment").value;

        // Simple validation example (you should implement more thorough validation)
        if (!name || !email || !address || !city || !zip || !payment) {
            alert("Please fill out all fields.");
        } else {
            // Send the form data to the server or proceed with payment
            alert("Order placed successfully!");
        }
    });
});
