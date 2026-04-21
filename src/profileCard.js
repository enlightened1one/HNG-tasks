// script.js

function updateLiveTime() {
  const timeElement = document.getElementById('time-display');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Update time immediately when page loads
updateLiveTime();

// Update every 500ms for smooth live feel
setInterval(updateLiveTime, 500);

// Optional: Click avatar to upload new image
document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.querySelector('[data-testid="test-user-avatar"]');
  
  if (avatar) {
    avatar.style.cursor = 'pointer';
    avatar.setAttribute('title', 'Click to change avatar');

    avatar.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      
      input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            avatar.src = event.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
      
      input.click();
    });
  }
});