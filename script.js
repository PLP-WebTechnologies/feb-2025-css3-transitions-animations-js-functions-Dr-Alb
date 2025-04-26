
const likeBtn = document.getElementById('likeButton');

// Check if user has already liked it
if (localStorage.getItem('liked') === 'true') {
  likeBtn.textContent = 'Liked ❤️';
  likeBtn.style.background = '#2ecc71';
}

likeBtn.addEventListener('click', () => {
  const alreadyLiked = localStorage.getItem('liked') === 'true';

  if (!alreadyLiked) {
    likeBtn.textContent = 'Liked ❤️';
    likeBtn.classList.add('liked');
    likeBtn.style.background = '#2ecc71';
    localStorage.setItem('liked', 'true');
    setTimeout(() => likeBtn.classList.remove('liked'), 400);
  } else {
    likeBtn.textContent = 'Like ❤️';
    likeBtn.style.background = '#e74c3c';
    localStorage.setItem('liked', 'false');
  }
});