document.addEventListener('DOMContentLoaded', () => {

  const CORRECT_PASSWORD = '5201314';
  const MAX_LENGTH = CORRECT_PASSWORD.length;

  const form = document.getElementById('passwordForm');
  const keypad = document.getElementById('keypad');
  const dots = document.querySelectorAll('#passcodeDots span');

  let currentInput = '';

  function updateDots() {
    dots.forEach((dot, index) => {
      if (index < currentInput.length) {
        dot.classList.add('filled');
      } else {
        dot.classList.remove('filled');
      }
    });
  }

  function appendValue(number) {
    if (currentInput.length >= MAX_LENGTH) return;

    currentInput += number;
    updateDots();

    if (currentInput.length === MAX_LENGTH) {
      setTimeout(checkPassword, 200);
    }
  }

  function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDots();
  }

  function resetInput() {
    currentInput = '';
    updateDots();
  }

  function checkPassword() {
    if (currentInput === CORRECT_PASSWORD) {
      setTimeout(() => {
        window.location.href = 'main.html';
      }, 400);
    } else {
      const dotsContainer = document.getElementById('passcodeDots');
      dotsContainer.classList.add('incorrect');

      setTimeout(() => {
        dotsContainer.classList.remove('incorrect');
        resetInput();
      }, 500);
    }
  }

  keypad.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    const value = button.dataset.value;
    const action = button.dataset.action;

    if (value) {
      appendValue(value);
    } else if (action === 'delete') {
      deleteLast();
    }
  });

  /* ===== HEART BACKGROUND ===== */

  function createHeartEffects() {
    if (document.querySelector('.heart-particle')) return;

    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart-particle');
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDelay = `${Math.random() * 8}s`;
      heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
      heart.style.backgroundColor =
        `hsl(${Math.random() * 20 + 330}, 80%, ${Math.random() * 20 + 60}%)`;
      document.body.appendChild(heart);
    }
  }

  createHeartEffects();

});