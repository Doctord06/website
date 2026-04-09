const buddies = document.querySelectorAll('.slime-buddy');
const buttons = document.querySelectorAll('.btn');

buddies.forEach((buddy) => {
  buddy.addEventListener('mouseenter', () => {
    buddy.style.transform = 'scale(1.08)';
  });

  buddy.addEventListener('mouseleave', () => {
    buddy.style.transform = '';
  });
});

buttons.forEach((button) => {
  button.addEventListener('mouseenter', () => {
    button.style.filter = 'brightness(1.03)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.filter = '';
  });
});