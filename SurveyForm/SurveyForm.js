// Selecting form and input elements
const form = document.getElementById("surveyForm");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content-body");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const submitForm = () => {
    // Retrieving input elements
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const dobInput = document.getElementById("dob");
    const countryInput = document.getElementById("country");
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const professionInput = document.getElementById("profession");
    const emailInput = document.getElementById("email");
    const mobileInput = document.getElementById("mobile");

    // Getting values from input fields
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const dob = dobInput.value;
    const country = countryInput.value;
    const gender = Array.from(genderInputs).find(input => input.checked)?.value || "";
    const profession = professionInput.value.trim();
    const email = emailInput.value.trim();
    const mobile = mobileInput.value.trim();

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());
	
    // Performing validation checks
    if (firstName === "") {
        showError(firstNameInput, "Enter your first name");
    }
    if (lastName === "") {
        showError(lastNameInput, "Enter your last name");
    }
    
    if(country === ""){
        showError(countryInput, "Enter your contry")
    }
    if(gender === ""){
        showError(genderInputs, "enter your gender")
    }

    if(profession === ""){
        showError(professionInput, "Enter your profrssion")
    }

    if (email === "") {
        showError(emailInput, "Enter your email address");
    }
    // } else if (!isValidEmail(email)) {
    //     showError(emailInput, "Enter a valid email address");
    // }

    if (mobile === "") {
        showError(mobileInput, "Enter your mobile number");
    }
    // } else if (!isValidMobile(mobile)) {
    //     showError(mobileInput, "Enter a valid mobile number");
    // }

    // const isValidMobile = (mobile) => {
    //     //we are checking if it contains only digits and has a valid length
    //     return /^\d+$/.test(mobile) && mobile.length === 10;
    // }





    // const isValidEmail = (email) => {
    //     return email.includes('@');
    // }
    // Add more validation checks for other fields as needed...

    // Checking for any remaining errors before popup display
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Displaying popup with selected values

    // Showing the popup
    const popup = document.getElementById("popup");
    popup.style.opacity = 1;
    popup.style.display = "block";

    // Add the blur effect to the background
    document.getElementById("formContainer").classList.add("blur-background");
	
    form.reset();

}

// Function to reset the form
const resetForm = () => {
    form.reset();
}

const closePopup = () => {
    const popup = document.getElementById("popup");
    popup.style.opacity = 0;
    popup.style.display = "none";

    // Remove the blur effect from the background
    document.getElementById("formContainer").classList.remove("blur-background");
}
// Function to close the popup


