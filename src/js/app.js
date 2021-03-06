import Like from '../img/like.png';

const btn = document.getElementById('button');
const wrapper = document.getElementById('wrapper');

btn.addEventListener('click', () => {
  const img = document.createElement('img');
  const random = Math.floor(Math.random() * 4 + 1);
  img.src = Like;
  img.classList = `like like-animate like-animate-${random}`;
  img.alt = 'like';

  wrapper.appendChild(img);

  setTimeout(() => {
    wrapper.removeChild(img);
  }, 500);
});
