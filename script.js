const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  container.innerHTML = '';
  const newGridSize = +prompt('Please enter the amount of squares per side');
  createGrid(newGridSize);
});

function getRandomNumber(range) {
  return Math.floor(Math.random() * range + 1);
}

function createGrid(count) {
  if (count && count > 0 && count <= 100) {
    for (let i = 0; i < count * count; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.backgroundColor = `rgb(${getRandomNumber(
        255
      )}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;

      const countPerRow = count;
      const containerWidth = container.clientWidth;
      const size = containerWidth / countPerRow;

      square.style.width = size + 'px';
      square.style.height = size + 'px';

      square.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = `rgb(${getRandomNumber(
          255
        )}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
      });
      square.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = `rgb(${getRandomNumber(
          255
        )}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
      });

      container.appendChild(square);
    }
  }
}

createGrid(20);
