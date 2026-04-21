#  Advanced Todo Card (Stage 1A)

# Overview

This project extends a basic Todo Card into a more interactive, stateful UI component.

The goal of Stage 1A is to simulate real-world UI behavior by introducing controlled state, user interactions, and dynamic rendering — all within a single component.

---

# Live Demo

👉 [https://hng-tasks-azure.vercel.app/]

---

##  Repository

👉 https://github.com/enlightened1one/HNG-tasks.git

---

## What Changed from Stage 0

Stage 0 was primarily static and DOM-driven. Stage 1A introduces structured state and interactive behavior.

### Major Improvements

* Introduced a **central state object** to manage all todo data
* Replaced static rendering with a **render() function**
* Added **edit mode with save/cancel functionality**
* Implemented **status transitions with bidirectional sync**
* Upgraded **time handling to support minutes, hours, days, and overdue states**
* Added **expand/collapse behavior for long descriptions**
* Introduced **priority-based visual indicators**
* Added **overdue detection and visual feedback**

---

## Design Decisions

### 1. State-Driven UI

Instead of relying on the DOM as main source of "true" state, a `todoState` object is used.

This allows:

* Easier updates
* Predictable rendering
* Proper rollback (Cancel in edit mode)

---

### 2. Single Render Function

All UI updates are handled through a centralized `render` function.

---

### 3. Status Synchronization

Status is controlled through:

* Checkbox
* Dropdown (status control)
* Visual indicator

All three are kept synchronous through shared state.

---

### 4. Time Engine

Time is dynamic, and is calculated using JavaScript `Date` object.

Features:

* Displays:

  * “Due in X days”
  * “Due in X hours”
  * “Due in X minutes”
  * “Overdue by X time”
* Updates every 30–60 seconds
* Stops updating when task is marked **Done**

---

### 5. Expand / Collapse Logic

* Long descriptions are truncated by default
* Users can toggle full visibility
* Designed to improve readability and UX

---

### 6. Edit Mode Architecture

* Entering edit mode creates a **snapshot of previous state**
* Save → updates state
* Cancel → restores previous state

This ensures safe editing without unintended data loss.

---

##  Features Implemented

###  Editable Content

* Title
* Description
* Priority
* Due date

---

###  Status Management

* Pending
* In Progress
* Done

Includes:

* Checkbox sync
* Dropdown control
* Visual indicator updates

---

### Prority Indicator

Visual feedback based on priority:

* Low → subtle
* Medium → moderate
* High → strong (highlighted)

---

### Expand / Collapse

* Toggle button
* Keyboard accessible
* Handles long descriptions gracefully

---

### Time Management

* Real-time updates
* Granular display (minutes → days)
* Overdue detection
* Completion state handling

---

### Visual State Changes

* Done → strikethrough + muted styling
* High priority → strong indicator
* Overdue → red accent
* In Progress → distinct style

---

## Accessibility Notes

* Semantic HTML (`section`, `time`, `button`)
* `aria-expanded` used for collapsible content
* Form inputs are properly labeled
* Keyboard accessibility for:

  * Expand/collapse
  * Form controls
* Focus handling:

  * Edit mode returns focus to Edit button

---

##  Testing Considerations

All required `data-testid` attributes are implemented:

* Edit form controls
* Status control
* Priority indicator
* Expand toggle
* Overdue indicator
* Existing Stage 0 test IDs preserved

---

## 🧑‍💻 Author

**NemiDev**

Frontend Developer

---




===================================


# Frontend Task 0 - To-Do Card

A clean, modern To-Do Card built with **Vite**, vanilla HTML, CSS, and Tailwind CSS.

---

## ✨ Features

- Fully responsive To-Do Card design
- Full-screen centered layout
- Priority badge, due date, time remaining, and status
- Interactive toggle to mark task as complete
- Edit and Delete action buttons
- Built with Vite for fast development and optimized builds

---

## 🛠️ Technologies Used

- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** (v4) - Utility-first CSS framework
- Vanilla HTML5 & JavaScript
- PostCSS

---

## 📁 Project Structure

```bash
frontend-task-0/
├── public/              # Static assets (favicons, icons)
├── src/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── main.js
│       └── todoCard.js
├── index.html
├── todo-card.html       # Full-screen To-Do Card page
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md


Command,Description
npm run dev,Start development server
npm run build,Build for production
npm run preview,Preview production build locally

index.html → Main entry point
todo-card.html → Full-screen To-Do Card page
