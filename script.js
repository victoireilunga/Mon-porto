// MENU SCROLL

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); // Sélectionne toutes les sections
let navLinks = document.querySelectorAll('header nav a'); // Sélectionne tous les liens du menu

// Toggle du menu lors du clic sur l'icône
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    let top = window.scrollY; // Position actuelle du scroll
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Décalage pour ajuster l'activation
        let height = sec.offsetHeight; // Hauteur de la section
        let id = sec.getAttribute('id'); // Récupère l'ID de la section

        // Vérifie si la section est dans la vue
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Retire la classe active de tous les liens
                // Ajoute la classe active au lien correspondant à la section visible
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Sélection de l'icône LinkedIn

let linkedinIcon = document.querySelector('#linkedin-icon');

// Ajout d'un événement de clic
linkedinIcon.addEventListener('click', (event) => {
    // Action à effectuer lors du clic
    alert("Vous pouvez cliquez sur Ok ");

    // Redirection vers une page LinkedIn dans une nouvelle fenêtre
    window.open("https://linkedin.com/in/victoire-ilunga/overlay/about-this-profile/", "_blank");
});


// FORMULAIRE
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            
            // Récupérer les valeurs des champs
            const fullName = document.getElementById("fullName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phoneNumber = document.getElementById("phoneNumber").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            // Afficher les valeurs récupérées dans la console
            console.log("Full Name:", fullName);
            console.log("Email:", email);
            console.log("Phone Number:", phoneNumber);
            console.log("Subject:", subject);
            console.log("Message:", message);

            // Validation simple des champs
            if (fullName === "" || email === "" || phoneNumber === "" || subject === "" || message === "") {
                displayMessage("Please fill in all fields.", "red");
                console.log("Validation Failed: All fields are required.");
            } else if (!validateEmail(email)) {
                displayMessage("Please enter a valid email.", "red");
                console.log("Validation Failed: Invalid email format.");
            } else if (!validatePhoneNumber(phoneNumber)) {  
                displayMessage("Please enter a valid phone number.", "red");
                console.log("Validation Failed: Invalid phone number format.");
            } else {
                // Si tout est OK, simule l'envoi du formulaire
                displayMessage("Message sent successfully!", "green");
                console.log("Form submitted successfully!");

                // Réinitialiser le formulaire
                form.reset();
            }é
        });
    }
});

// Fonction pour afficher un message avec une couleur
function displayMessage(msg, color) {
    const formMessage = document.getElementById("formMessage");
    if (formMessage) {
        formMessage.textContent = msg;
        formMessage.style.color = color;
        console.log("Display Message:", msg);
    }
}

// Fonction pour valider l'email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Fonction pour valider le numéro de téléphone
function validatePhoneNumber(phoneNumber) {
    const re = /^[0-9]{10}$/;
    return re.test(phoneNumber);
}
