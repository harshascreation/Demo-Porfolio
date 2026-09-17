const sliderButtons = document.querySelectorAll('.slider-btn');

sliderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const sliderId = button.dataset.slider;
    const direction = button.dataset.direction;
    const slider = document.getElementById(sliderId);

    if (!slider) return;

    const items = slider.querySelectorAll('.slide-item');
    const firstItem = items[0];
    const gap = parseFloat(getComputedStyle(slider).gap) || 0;
    const scrollAmount = firstItem ? firstItem.getBoundingClientRect().width + gap : 300;

    slider.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  });
});

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim() || 'There';

    formStatus.textContent = `Thanks ${name}! Your message has been received and I will get back to you soon.`;
    contactForm.reset();
  });
}
