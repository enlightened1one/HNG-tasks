// ---------------- STATE ----------------
let todoState = {
  title: "Submit Report",
  description:
    "Prepare and submit the quarterly financial report to the management by the end of this week bro.",
  priority: "High",
  dueDate: "2026-05-15",
  status: "In Progress",
  isExpanded: false,
};

let previousState = null;

// ---------------- ELEMENTS ----------------
const titleEl = document.querySelector('[data-testid="test-todo-title"]');
const descEl = document.querySelector('[data-testid="test-todo-description"]');
const dueDateEl = document.querySelector("#dueDate");
const timeEl = document.querySelector("#timeRemaining");
const overdueEl = document.querySelector("#overdueIndicator");
const statusEl = document.querySelector("#status");

const checkbox = document.querySelector("#status_toggle");
const statusControl = document.querySelector("#statusControl");

const priorityText = document.querySelector("#priorityText");
const priorityIndicator = document.querySelector("#priorityIndicator");

const expandBtn = document.querySelector("#expandToggle");

const editBtn = document.querySelector("#editBtn");
const form = document.querySelector("#editForm");

const editTitle = document.querySelector("#editTitle");
const editDesc = document.querySelector("#editDesc");
const editPriority = document.querySelector("#editPriority");
const editDate = document.querySelector("#editDate");

const saveBtn = document.querySelector("#saveBtn");
const cancelBtn = document.querySelector("#cancelBtn");

// ---------------- TIME LOGIC ----------------
function formatTimeRemaining() {
  if (todoState.status === "Done") return "Completed";

  const now = new Date();
  const due = new Date(todoState.dueDate);
  const diff = due - now;

  const abs = Math.abs(diff);

  const minutes = Math.floor(abs / (1000 * 60));
  const hours = Math.floor(abs / (1000 * 60 * 60));
  const days = Math.floor(abs / (1000 * 60 * 60 * 24));

  let text = "";

  if (days > 0) text = `${days} day${days !== 1 ? "s" : ""}`;
  else if (hours > 0) text = `${hours} hour${hours !== 1 ? "s" : ""}`;
  else text = `${minutes} minute${minutes !== 1 ? "s" : ""}`;

  return diff < 0 ? `Overdue by ${text}` : `Due in ${text}`;
}

function updateTime() {
  const text = formatTimeRemaining();
  timeEl.textContent = text;

  overdueEl.style.display = text.includes("Overdue") ? "inline" : "none";
}

// ---------------- PRIORITY ----------------
function updatePriority() {
  const colors = {
    Low: "green",
    Medium: "orange",
    High: "red",
  };

  priorityText.textContent = todoState.priority;
  priorityIndicator.style.background = colors[todoState.priority];
  priorityIndicator.style.width = "10px";
  priorityIndicator.style.height = "10px";
  priorityIndicator.style.display = "inline-block";
  priorityIndicator.style.borderRadius = "50%";
}

// ---------------- STATUS ----------------
function syncStatus() {
  statusEl.textContent = todoState.status;

  checkbox.checked = todoState.status === "Done";
  statusControl.value = todoState.status;

  if (todoState.status === "Done") {
    titleEl.style.textDecoration = "line-through";
    descEl.style.textDecoration = "line-through";
  } else {
    titleEl.style.textDecoration = "none";
    descEl.style.textDecoration = "none";
  }
}

checkbox.addEventListener("change", () => {
  todoState.status = checkbox.checked ? "Done" : "Pending";
  render();
});

statusControl.addEventListener("change", (e) => {
  todoState.status = e.target.value;
  render();
});

// ---------------- EXPAND ----------------
expandBtn.addEventListener("click", () => {
  todoState.isExpanded = !todoState.isExpanded;
  render();
});

// ---------------- EDIT ----------------
editBtn.addEventListener("click", () => {
  previousState = { ...todoState };

  form.style.display = "block";

  editTitle.value = todoState.title;
  editDesc.value = todoState.description;
  editPriority.value = todoState.priority;
  editDate.value = todoState.dueDate;
});

saveBtn.addEventListener("click", () => {
  todoState.title = editTitle.value;
  todoState.description = editDesc.value;
  todoState.priority = editPriority.value;
  todoState.dueDate = editDate.value;

  form.style.display = "none";
  render();
});

cancelBtn.addEventListener("click", () => {
  todoState = previousState;
  form.style.display = "none";
  render();
});

// ---------------- RENDER ----------------
function render() {
  titleEl.textContent = todoState.title;

  if (!todoState.isExpanded && todoState.description.length > 100) {
    descEl.textContent = todoState.description.slice(0, 100) + "...";
    expandBtn.textContent = "Show more";
  } else {
    descEl.textContent = todoState.description;
    expandBtn.textContent = "Show less";
  }

  dueDateEl.textContent = todoState.dueDate;

  updatePriority();
  syncStatus();
  updateTime();
}

// ---------------- INIT ----------------
render();
setInterval(updateTime, 30000);