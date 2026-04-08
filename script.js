const friends = document.querySelectorAll('.friend');
const buttons = document.querySelectorAll('.btn');

friends.forEach((friend) => {
  friend.addEventListener('mouseenter', () => {
    friend.style.transform = 'scale(1.12)';
  });

  friend.addEventListener('mouseleave', () => {
    friend.style.transform = '';
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