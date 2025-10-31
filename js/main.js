// Smooth scroll and active link animation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Simple fade-in animation
window.addEventListener('load', () => {
  document.body.classList.add('fade-in');
});
