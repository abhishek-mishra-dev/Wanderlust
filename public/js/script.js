document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".needs-validation");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      const formData = new FormData(form);

      try {
        const response = await fetch("https://wanderlust-ehk0.onrender.com/listings", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Listing added successfully:", result);
        // Redirect or update the UI as needed
      } catch (error) {
        console.error("Error adding listing:", error);
      }
    }

    form.classList.add("was-validated");
  });
});
