document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const successMessage = document.getElementById("success-message");
    const loginButton = document.querySelector(".login-button");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
            username: document.querySelector("input[placeholder='Username*']").value,
            organization: document.querySelector("input[placeholder='Organization*']").value,
            email: document.querySelector("input.email-field").value,
            country: document.querySelector("input[placeholder='Country*']").value,
            phone: document.querySelector("input[placeholder='Phone number*']").value,
            remember_me: document.querySelector("#remember-me").checked,
        };

        // Send data to the server using fetch
        fetch("http://localhost:3000/signup", { // Adjusted URL for main server
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(formData).toString(),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Show the success message
            successMessage.classList.add("show");

            // Hide the message after 3 seconds
            setTimeout(() => {
                successMessage.classList.remove("show");
            }, 3000);

            // Show the pop-up message
            alert("Form submitted successfully!");

            // Redirect to page3.html
            window.location.href = "/page3";

            form.reset(); // Reset the form fields
        })
        .catch(error => {
            console.error("Error during fetch:", error);
            alert("There was an error submitting the form. Please try again.");
        });
    });

    loginButton.addEventListener("click", function () {
        // Redirect to page3.html when login is clicked
        window.location.href = "/page3";
    });
});
