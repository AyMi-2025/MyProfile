// Terminal Loader Fade-out
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if(loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 500);
    }
  }, 1200);
});

// Cursor Glow Follower
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Scroll Reveal Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { 
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Theme Toggle
const theme = document.getElementById('theme');
theme.addEventListener('click', () => {
  document.body.classList.toggle('light');
  theme.textContent = document.body.classList.contains('light') ? '☾' : '☼';
});

// Active Sidebar Navigation Links
document.querySelectorAll('.side-nav a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelectorAll('.side-nav a').forEach(x => x.classList.remove('active'));
    a.classList.add('active');
  });
});

// Mobile Menu Toggle
document.querySelector('.menu').addEventListener('click', () => {
  const nav = document.querySelector('.side-nav');
  const open = nav.dataset.open === '1';
  nav.dataset.open = open ? '0' : '1';
  nav.style.display = open ? 'none' : 'flex';
  nav.style.paddingTop = open ? '0' : '20px';
});

// Live GitHub API Stats Integration
async function fetchGitHubStats() {
  try {
    const response = await fetch('https://api.github.com/users/AyMi-2025');
    const data = await response.json();
    if(data.public_repos !== undefined) {
      document.getElementById('gh-repos').textContent = data.public_repos;
      document.getElementById('gh-followers').textContent = data.followers;
    }
  } catch (err) {
    console.error('Failed to fetch GitHub stats', err);
  }
}
fetchGitHubStats();

// Project Case Study Modals
document.querySelectorAll('.btn-case-study').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('active');
  });
});

document.querySelectorAll('.modal-close, .modal').forEach(el => {
  el.addEventListener('click', (e) => {
    if(e.target === el || e.target.classList.contains('modal-close')) {
      document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    }
  });
});

// Magnetic Buttons Effect
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0px, 0px)';
  });
});