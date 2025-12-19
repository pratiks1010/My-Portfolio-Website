# Modern Portfolio Website

A high-performance, responsive, and customizable portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Scrolling:** React Scroll

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 Customization

All content is managed through a single file: `src/data/data.js`.

### 1. Update Personal Info
Open `src/data/data.js` and modify the `personalData` object:
- Name, Role, Bio
- Profile Image URL
- Social Links & Contact Info

### 2. Update Skills
Modify the `skillsData` object. You can import new icons from `react-icons` if needed.

### 3. Update Projects
Modify the `projectsData` array to showcase your work. Add images, descriptions, and links.

### 4. Update Experience
Modify the `experienceData` array to reflect your work history.

## 🎨 Styling

- The project uses **Tailwind CSS**. Global styles are in `src/index.css`.
- The theme is dark mode by default, using Slate colors (`bg-slate-900`, `text-slate-100`).
- Accent colors are Cyan and Blue. You can change these in the components or config.

## 📂 Project Structure

```
src/
├── components/       # UI Components (Hero, About, Skills, etc.)
├── data/            # Data file (data.js)
├── assets/          # Static assets
├── App.jsx          # Main component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## 📄 License

MIT License
