// Select elements using querySelector
const form = document.querySelector(".resume-form");
const output = document.querySelector(".resume-output");

// Handle form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values dynamically
    const inputs = form.querySelectorAll("input, textarea");

    const name = inputs[0].value;
    const email = inputs[1].value;
    const phone = inputs[2].value;
    const skills = inputs[3].value;
    const education = inputs[4].value;

    // Clear previous resume
    output.innerHTML = "";

    // Create elements dynamically
    const h1 = document.createElement("h1");
    h1.textContent = name;

    const emailP = document.createElement("p");
    emailP.textContent = "Email: " + email;

    const phoneP = document.createElement("p");
    phoneP.textContent = "Phone: " + phone;

    const skillsTitle = document.createElement("h3");
    skillsTitle.textContent = "Skills";

    const skillsP = document.createElement("p");
    skillsP.textContent = skills;

    const eduTitle = document.createElement("h3");
    eduTitle.textContent = "Education";

    const eduP = document.createElement("p");
    eduP.textContent = education;

    // Append elements to resume output
    output.append(
        h1,
        emailP,
        phoneP,
        skillsTitle,
        skillsP,
        eduTitle,
        eduP
    );
});c