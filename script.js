const container = document.querySelector('.container');
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  container.innerHTML = '';
  const newGridSize = +prompt('Please enter the amount of squares per side')
  createGrid(newGridSize)
})


function createGrid(count) {
  if (count && count > 0 && count <= 100) {
    for (let i = 0; i < count * count; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      const countPerRow = count;
      const containerWidth = container.clientWidth;
      const size = (containerWidth / countPerRow);
      console.log(containerWidth / countPerRow, (countPerRow - 1) * 5);

      square.style.width = size + 'px';
      square.style.height = size + 'px';

      square.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'blue';
      });
      square.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = 'green';
      });

      container.appendChild(square);
    }
  }
}

createGrid(50)
