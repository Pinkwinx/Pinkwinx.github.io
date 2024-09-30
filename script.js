document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
      document.querySelector('.overlay').style.display = 'none';
      document.querySelector('.content').removeAttribute('aria-hidden');
    }, 9500);
  });
  