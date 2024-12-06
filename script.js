document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Collect form data
      const formData = {
        firstName: document.querySelector("input[placeholder='Enter your first name']").value,
        lastName: document.querySelector("input[placeholder='Enter your last name']").value,
        email: document.querySelector("input[placeholder='Enter your email']").value,
      };
  
      // Submit the data using Fetch API
      try {
        const response = await fetch("http://localhost:5000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          alert(result.message); // Success message
          // Redirect to login.html
          window.location.href = "login.html";
        } else {
          alert(`Error: ${result.message}`); // Error message
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert("An error occurred while submitting the form.");
      }
    });
  });
  