// eslint-disable-next-line
console.log('app.js included');

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  const popoverTitle = 'Popover title';
  const popoverText = "And here's some amazing content. It's very engaging. Right?";

  const popover = document.createElement('div');
  popover.classList.add('popover');
  document.body.appendChild(popover);
  popover.innerHTML = `
    <h3 class="popover-header">${popoverTitle}</h3><div class="popover-body">${popoverText}</div>
  `;
  const { top, left } = btn.getBoundingClientRect();
  popover.style.top = `${window.scrollY + top + btn.offsetHeight - popover.offsetHeight - 30}px`;
  popover.style.left = `${window.scrollX + left + btn.offsetWidth / 2}px`;
});
