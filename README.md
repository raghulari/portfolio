# Portfolio

A macOS-inspired interactive portfolio that simulates a desktop-like environment directly in the browser.  
Designed to demonstrate advanced frontend engineering concepts such as window lifecycle management, animation orchestration, and global state control.

---

## ✨ Features

- macOS-style window system
- Draggable windows with dynamic z-index management
- Smooth, state-driven animations using GSAP
- Centralized and predictable window state management
- Dock-style application interactions
- Responsive and performance-focused UI
- Clean, scalable project architecture

---

## 🧠 Architecture Overview

### Window Management
- Each window maintains its own lifecycle state
- Focus and stacking handled via z-index tracking

### State Management
- Global application state handled using Zustand
- Immutable state updates via Immer
- Simple, scalable, and debuggable state flow

### Animations
- Entry and exit transitions powered by GSAP
- Drag interactions implemented using `gsap/Draggable`
- Animations are driven by application state, not direct DOM manipulation

---

## 🛠 Tech Stack

| Category | Technology |
|--------|------------|
| Framework | React |
| State Management | Zustand + Immer |
| Animations | GSAP |
| Styling | Tailwind CSS |
| Build Tool | Vite |

---

## 📂 Project Structure

```bash
src/
├── components/        # Reusable UI components
├── windows/           # Individual window views
├── store/             # Zustand state stores
├── constants/         # Window configuration & static data
├── hooks/             # Custom React hooks
└── styles/            # Global styles
