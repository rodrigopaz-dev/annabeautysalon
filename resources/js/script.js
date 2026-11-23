// Mobile dropdown menu logic
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});

// Logic for opening/closing of Modal window
const modal = document.getElementById('booking-modal');
const openModalButtons = document.querySelectorAll('.open-modal');
const closeModalButton = document.querySelector('.close-modal');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if user clicks out of the content box
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Appointment form logic
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const service = document.getElementById('service-select').value;
    const date = document.getElementById('date').value;
    
    alert(`Thanks, ${name}! We have received your request for ${service} service for ${date}. We will be in touch with you soon to confirm date and hour.`);
    modal.style.display = 'none';
    this.reset();
});

// Contact form logic
document.getElementById('main-contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully. We will respond to you within 24 hours.');
    this.reset();
});
