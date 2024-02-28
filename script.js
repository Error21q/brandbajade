const container = document.querySelector('.container');

container.addEventListener('wheel', (e) => {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
});

const handleScroll = () => {
  const containerRect = container.getBoundingClientRect();
  const row1Rect = row1.getBoundingClientRect();
  const row2Rect = row2.getBoundingClientRect();

  if (row1Rect.left <= containerRect.width && row1Rect.right >= 0) {
    container.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
  } else if (row2Rect.left <= containerRect.width && row2Rect.right >= 0) {
    container.scrollTo({
      left: container.scrollWidth,
      behavior: 'smooth',
    });
  }
};

const row1 = document.querySelector('.row1');
const row2 = document.querySelector('.row2');
container.addEventListener('scroll', handleScroll);

const row1Items = document.querySelectorAll('.row1 .item');

const animateRow1Items = () => {
  row1Items.forEach((item) => {
    item.classList.add('animate');
  });
};
/*const row1Items = document.querySelectorAll('.row1 .item');
const row2 = document.querySelector('.row2');
const container = document.querySelector('.container');
const row1Inner = document.querySelector('.row1-inner');

const animateRow1Items = () => {
  const row2Top = row2.getBoundingClientRect().top;
  const containerHeight = container.offsetHeight;
  const scrollTop = window.pageYOffset;
  const scrollPercent = scrollTop / (containerHeight - window.innerHeight);

  row1Items.forEach((item, index) => {
    const itemWidth = item.offsetWidth;
    const itemHeight = item.offsetHeight;
    const itemLeft = itemWidth * scrollPercent * (index - 1);
    const itemTop = itemHeight * scrollPercent;

    item.style.transform = `translate(${itemLeft}px, ${itemTop}px)`;
  });

  if (row2Top < 0) {
    row1Items.forEach((item, index) => {
      if (index === 1) {
        item.style.transform = 'translate(0, 0)';
      } else {
        item.style.transform = 'translate(-50%, 0)';
      }
    });

    const centerX = row1Inner.offsetWidth / 2 - row1Items[1].offsetWidth / 2;
    row1Items.forEach((item) => {
      item.style.transition = 'transform 0.5s ease-out';
      item.style.transform = `translate(${centerX}px, 0)`;
    });
  } else {
    row1Items.forEach((item) => {
      item.style.transition = 'none';
    });
  }
};

window.addEventListener('scroll', animateRow1Items);
animateRow1Items();*/