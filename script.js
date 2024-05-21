function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.card-content').style.opacity = '1';
  });
  card.addEventListener('mouseleave', () => {
    card.querySelector('.card-content').style.opacity = '0';
  });
});
