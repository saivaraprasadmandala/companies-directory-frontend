# Companies Directory – Frontend Development

**Technical Assessment Submission**

Frontend Developer Role | Frontlines Media

---

## Project Overview

This project is a **Next.js 15 (React) based frontend application** developed as part of the **technical assessment for the Frontend Developer position at Frontlines Media**.

The application displays a directory of companies with powerful filtering, sorting, pagination, and dual view modes (grid and table). It is designed with **scalability, performance, and user experience** in mind, making it production-ready and easy to integrate with real APIs.

**Live Demo:** [https://companies-directory-frontend.vercel.app/](https://companies-directory-frontend.vercel.app/)

**Repository:** [https://github.com/saivaraprasadmandala/companies-directory-frontend](https://github.com/saivaraprasadmandala/companies-directory-frontend)

---

## ✅ Requirements Checklist

### Core Features

* **Responsive UI** – Built with Next.js 15 & React
* **Company Display** – Toggle between grid and table view
* **Filter Controls** – Search by name, filter by industry and location
* **Loading & Error States** – Skeleton loaders and error messages
* **State Management** – Custom React hooks (`useCompanies`, `usePagination`)
* **API Integration** – Mock data with service layer abstraction

### Bonus Features

* **Pagination** – Navigate company results page-by-page
* **Sorting Options** – Sort by name, employee count, and founded year
* **UI Library** – Tailwind CSS v4 + shadcn/ui for polished UI

---

## 🌟 Features

### User Experience

* **Dual View Modes** – Grid cards & table layout
* **Advanced Search** – Real-time company name search
* **Multi-Filter System** – Filter by industry & city
* **Sorting Controls** – By name, employees, and founding year
* **Responsive Design** – Optimized for desktop, tablet, and mobile

### Technical Highlights

* **TypeScript First** – Type-safe, strongly typed components and state
* **Reusable Hooks** – Encapsulated filtering, sorting, and pagination logic
* **Service Layer** – API abstraction for easy backend integration
* **Performance Optimizations** – Memoization with `useMemo`, `useCallback`
* **Clean Architecture** – Modular, scalable, and production-ready

---

## 🛠️ Tech Stack

| Category           | Technology                                 |
| ------------------ | ------------------------------------------ |
| **Framework**      | Next.js 15 (App Router)                    |
| **Language**       | TypeScript                                 |
| **Styling**        | Tailwind CSS v4                            |
| **UI Components**  | shadcn/ui                                  |
| **Icons**          | Lucide React                               |
| **State Handling** | Custom React Hooks                         |
| **Data**           | Mock JSON (Indian companies, INR currency) |

---

## 🚀 Getting Started

### Prerequisites

* Node.js **18.17+**
* npm, yarn, or pnpm

### Setup

```bash
# Clone repo
git clone https://github.com/saivaraprasadmandala/companies-directory-frontend
cd companies-directory-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

```bash
npm run dev      # Start local dev server
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run ESLint checks
```

---

## 📂 Project Structure

```
companies-directory/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page
│   └── globals.css             # Global styles
├── components/
│   ├── companies/              # Company UI components
│   ├── filters/                # Search & filter controls
│   └── ui/                     # shadcn/ui components
├── hooks/
│   ├── use-companies.ts        # Filtering, sorting, state logic
│   └── use-pagination.ts       # Pagination logic
├── services/
│   └── company-service.ts      # API abstraction layer
├── lib/
│   ├── constants.ts            # Global constants
│   └── data/companies.ts       # Mock company dataset
└── types/
    ├── company.ts              # Company type definitions
    └── filters.ts              # Filter/sort type definitions
```

---

## 🔑 Key Design Decisions

* **Custom Hooks** – Business logic separated for reusability and clarity
* **Service Layer** – Future-proofed to easily switch mock data with real APIs
* **Responsive First** – Tailwind breakpoints ensure seamless device support
* **Error & Empty States** – Better UX with user-friendly messages
* **Type Safety** – Strong TypeScript types prevent runtime errors

---

## 📦 Deployment

This project is deployed on **Vercel** with CI/CD for instant updates.

**Live URL:** [https://companies-directory-frontend.vercel.app/](https://companies-directory-frontend.vercel.app/)

---

## 🎥 Video Walkthrough

**Duration:** ~3 minutes

Covers:

1. Full feature demo (search, filter, sort, pagination, grid/table toggle)
2. Code structure and logic overview
3. Key technical choices explained

**Video Link:** [Insert video link]

---

## 📑 Documentation

* [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) – Detailed architecture & design decisions

---

## 📌 Submission Details

**Candidate:** Sai Vara Prasad Mandala

**Submission Date:** October 6, 2025

**Deadline:** October 6, 2025 – 05:00 PM

✅ GitHub Repo with complete source code

✅ Vercel Live Deployment

✅ README with project overview

✅ Video Walkthrough

✅ Core + Bonus Features implemented

---

## 📬 Contact

* **Email:** [mandalasaivaraprasad@gmail.com](mailto:mandalasaivaraprasad@gmail.com)
* **GitHub:** [saivaraprasadmandala](https://github.com/saivaraprasadmandala)
* **LinkedIn:** [saivaraprasadmandala](https://linkedin.com/in/saivaraprasadmandala)

---

✨ *Thank you for reviewing my submission!*
