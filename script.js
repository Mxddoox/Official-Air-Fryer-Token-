// Mini-Game Script
let fryCount = 0;
const fryCountDisplay = document.getElementById('fry-count');
const progressBar = document.querySelector('.progress');
const sizzleSound = document.getElementById('sizzle-sound');

document.querySelectorAll('.item-btn').forEach(button => {
  button.addEventListener('click', () => {
    const reward = parseInt(button.getAttribute('data-reward'));
    cookItem(reward);
  });
});

function cookItem(reward) {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      fryCount += reward;
      fryCountDisplay.textContent = `$FRY Cooked: ${fryCount}`;
      sizzleSound.play();
      progressBar.style.width = '0%';
    }
  }, 200);
}
