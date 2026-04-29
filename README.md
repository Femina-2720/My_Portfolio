
# Femina K | Developer Portfolio 🚀

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> **🌐 Live Website:** [femina-portfolio-seven.vercel.app](https://femina-portfolio-seven.vercel.app/)

Welcome to the source code for my personal developer portfolio! This is a modern, highly responsive, and interactive web application built to showcase my journey, skills, and projects as a Full-Stack Developer, AI Developer, and UI/UX Designer.

## ✨ Key Features

*   **Sleek Dark Theme:** A custom-designed dark navy and cyan aesthetic (`#0a192f` & `#64ffda`) optimized for readability, contrast, and modern developer branding.
*   **Dynamic Animations:** Features custom CSS typing effects with a blinking caret, fade-in-up transitions, and scroll-triggered active states using the `IntersectionObserver` API.
*   **Component-Driven Architecture:** Built with highly modular, reusable components leveraging `shadcn/ui` and Radix UI primitives for maximum accessibility.
*   **Interactive Project Showcase:** A dynamic scroll-spy project section featuring embedded image carousels, responsive layouts, and quick links to live demos, GitHub, and Figma prototypes.
*   **Mobile-First & Fully Responsive:** Fluid UI that adapts seamlessly from compact mobile screens to ultrawide desktop monitors, complete with a custom mobile navigation drawer.

## 🛠️ Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Library:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Deployment:** [Vercel](https://vercel.com/)

## 📂 Project Structure

```text
femina-2720-feminaportfolio/
├── app/                  # Next.js App Router (Pages, Layout, Globals)
├── components/           # React Components
│   ├── ui/               # Reusable base components (shadcn/ui)
│   ├── about-section.tsx # Skills and competencies
│   ├── hero-section.tsx  # Animated landing view
│   ├── projects-section.tsx # IntersectionObserver-driven project list
│   └── ...               # Navbar, Footer, Contact, etc.
├── hooks/                # Custom React Hooks (e.g., use-mobile)
├── lib/                  # Utility functions (e.g., tailwind merge)
└── public/               # Static assets (Images, Resume PDF)
```

## 💻 Getting Started (Local Development)

To run this project locally on your machine, follow these steps:

**1. Clone the repository:**
```bash
git clone [https://github.com/Femina-2720/femina-portfolio.git](https://github.com/Femina-2720/femina-portfolio.git)
cd femina-portfolio
```

**2. Install dependencies:**
This project uses `pnpm` for package management.
```bash
pnpm install
```

**3. Run the development server:**
```bash
pnpm run dev
```

**4. Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🧠 Engineering Highlights

*   **Scroll-Spy Project Cards:** Instead of static lists, the `projects-section.tsx` utilizes a custom `IntersectionObserver` to track which project is currently in the viewport, dynamically shifting opacity and Y-axis translations to keep the user's focus on the active content.
*   **Theming Engine:** The app uses `next-themes` wrapped in a custom `theme-provider.tsx` to handle deep system-level UI states, allowing for easy expansion into light/dark mode toggling in the future.
*   **Optimized Assets:** The image slideshows and hero sections are built to handle lazy loading and graceful fallbacks, ensuring the site remains fast and performant.

## 📫 Let's Connect

I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.

*   **Email:** [femi65669@gmail.com](mailto:femi65669@gmail.com)
*   **LinkedIn:** [linkedin.com/in/femina37](https://www.linkedin.com/in/femina37)
*   **WhatsApp:** [+91 8940715740](https://wa.me/918940715740)

---
> *Designed and Built by Femina K.*
