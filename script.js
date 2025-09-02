// AOS Init
AOS.init({
  duration: 1000,
  once: true,
});

// Toggle sidebar di mobile
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");

openBtn.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
});

// Accordion pengalaman
document.querySelectorAll('.toggle-card').forEach(card => {
  card.addEventListener('click', () => {
    const content = card.parentElement.querySelector('.card-content');
    const arrow = card.querySelector('.arrow');
    content.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
  });
});
