const dueDateElement = document.querySelector('#dueDate');
const timeRemainingElement = document.querySelector('#timeRemaining');
const statusToggle = document.querySelector('#status_toggle');
const statusIndicator = document.querySelector('#status');
const progressLoader = document.querySelector('#progressLoader');

function updateStatus() {
    if (statusToggle.checked) {
        statusIndicator.textContent = "Completed ✅";
            //To Simulate theprogress completion
        progressLoader.style.animation = "l2 2s 1 forwards";
        dueDateElement.style.textDecoration = "line-through";
        timeRemainingElement.style.textDecoration = "line-through";
    } else {
        statusIndicator.textContent = "In Progress";
        progressLoader.style.animation = "l1 2s 1 forwards";
        dueDateElement.style.textDecoration = "none";
        timeRemainingElement.style.textDecoration = "none";
    }
}

function calculateTimeRemaining(dueDate) {
  const currentDate = new Date();
  const dueDateObj = new Date(dueDate);
  const timeDiff = dueDateObj - currentDate;

  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

// to get date from my DOm
const dueDateValue = dueDateElement.textContent;

// calculation initialization
const daysRemaining = calculateTimeRemaining(dueDateValue);

// the final display including adding plural logic for day or days
timeRemainingElement.textContent = `${daysRemaining} day${daysRemaining !== 1 ? 's' : ''}`;

statusToggle.addEventListener('change', updateStatus);



if (daysRemaining < 0) {
  timeRemainingElement.textContent = "Overdue ⚠️";
} else {
  timeRemainingElement.textContent = `${daysRemaining} day${daysRemaining !== 1 ? 's' : ''}`;
}



