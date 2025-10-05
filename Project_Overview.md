# Companies Directory - Project Overview

## Architecture

### System Design

```
User Interface (React Components)
         ↓
Custom Hooks (Business Logic)
         ↓
Service Layer (API Abstraction)
         ↓
Data Layer (Mock/Real API)
```

### Directory Structure

```
companies-directory/
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Main page (data fetching)
│   └── globals.css             # Tailwind + theme config
├── components/
│   ├── companies/              # Company display components
│   ├── filters/                # Search & filter components
│   └── ui/                     # shadcn/ui components
├── hooks/
│   ├── use-companies.ts        # Data fetching & filtering
│   └── use-pagination.ts       # Pagination logic
├── services/
│   └── company-service.ts      # API abstraction layer
├── lib/
│   ├── constants.ts            # App constants
│   └── data/companies.ts       # Mock data
└── types/
    ├── company.ts              # Company entity types
    └── filters.ts              # Filter types
```

---

## Services & Types

### Service Layer (`services/company-service.ts`)

**Purpose**: Abstracts data operations for easy API integration.

```typescript
class CompanyService {
  static async fetchCompanies(): Promise<Company[]>
  static async fetchCompanyById(id: string): Promise<Company | null>
  static async searchCompanies(query: string): Promise<Company[]>
}
```

**Benefits**:

* Single source for data operations
* Easy to swap mock data with real API
* Testable in isolation
* Consistent interface across app

**Migration to Real API**:

```typescript
// Change one line in company-service.ts:
const response = await fetch('/api/companies')
return response.json()
```

---

### Type System

**Company Type** (`types/company.ts`):

```typescript
interface Company {
  id: string
  name: string
  industry: string
  location: string
  employees: number
  founded: number
  revenue: string
  description: string
  website: string
  logo: string
}
```

**Filter Types** (`types/filters.ts`):

```typescript
type SortOption = "name-asc" | "name-desc" | "employees-asc" | "employees-desc" | "founded-asc" | "founded-desc"
type ViewMode = "grid" | "table"

interface CompanyFilters {
  searchQuery: string
  industry: string
  location: string
  sortBy: SortOption
}
```

---

## Custom Hooks

### `useCompanies` - Data Management

**Handles**: Data fetching, loading states, error handling, retry logic

```typescript
const { companies, isLoading, error, retry } = useCompanies()
```

### `useCompanyFilters` - Filtering Logic

**Handles**: Search, industry filter, location filter, sorting

```typescript
const filtered = useCompanyFilters(companies, filters)
```

**Performance**: Uses `useMemo` to prevent unnecessary recalculations

### `usePagination` - Pagination Logic

**Handles**: Page navigation, item slicing, page calculations

```typescript
const { paginatedItems, currentPage, totalPages, goToPage } = usePagination(items, itemsPerPage)
```

**Generic**: Works with any data type (`<T>`)

---

## Project Lifecycle

### Initialization Flow

```
1. User visits → Next.js loads layout.tsx
2. Header/Footer render
3. page.tsx mounts → useCompanies() triggers
4. CompanyService fetches data
5. Loading state → Data loaded → UI renders
```

### User Interaction Flow

```
User Action (search/filter/sort)
    ↓
Component updates filter state
    ↓
useCompanyFilters recalculates
    ↓
usePagination slices results
    ↓
UI updates with filtered/paginated data
```

---

## Code Structure

### 1. Entry Point (`app/page.tsx`)

**Role**: Fetch data and handle loading/error states

```typescript
export default function Home() {
  const { companies, isLoading, error, retry } = useCompanies()
  
  if (isLoading) return <LoadingState />
  if (error) return <ErrorState onRetry={retry} />
  return <CompanyList companies={companies} />
}
```

### 2. Main Component (`components/companies/company-list.tsx`)

**Role**: Manage filters, pagination, and view mode

```typescript
export function CompanyList({ companies }) {
  const [filters, setFilters] = useState(defaultFilters)
  const [viewMode, setViewMode] = useState("grid")
  
  const filtered = useCompanyFilters(companies, filters)
  const { paginatedItems } = usePagination(filtered, ITEMS_PER_PAGE)
  
  return (
    <>
      <CompanyFilters filters={filters} onChange={setFilters} />
      <ViewToggle mode={viewMode} onChange={setViewMode} />
      {viewMode === "grid" ? <GridView /> : <TableView />}
      <Pagination {...paginationProps} />
    </>
  )
}
```

### 3. Display Components

* **CompanyCard**: Grid view with cards (better for browsing)
* **CompanyTable**: Table view with rows (better for comparing)

---

## Data Flow

```
User Action
    ↓
Component updates state
    ↓
useCompanyFilters (filtering + sorting)
    ↓
usePagination (slicing)
    ↓
Display components render
    ↓
UI updates
```

### State Management

* **Local State** (useState): Filters, view mode, current page
* **Derived State** (useMemo): Filtered/paginated results
* **Server State** (useEffect): Company data, loading, errors

---

## Key Design Decisions

### 1. Custom Hooks

**Why**: Reusable logic, testable, keeps components clean

### 2. Service Layer

**Why**: Easy API integration, single source of truth, testable

### 3. Client-Side Filtering

**Why**: Instant feedback, no loading states, simple for demo
**Migration**: Easy to move to server-side filtering later

### 4. TypeScript

**Why**: Type safety, better IDE support, self-documenting, refactoring safety

### 5. Component Structure

**Why**:

* Separation of concerns (data fetching vs display)
* Reusable components
* Easy to test and maintain

### 6. Tailwind CSS + shadcn/ui

**Why**: Fast development, consistent design, accessible, customizable

---

## Performance Optimizations

* **useMemo**: Prevents unnecessary filter recalculations
* **Pagination**: Only renders visible items (12 per page)
* **Conditional Rendering**: Grid vs Table (not both)
* **Key Props**: Helps React identify and update items efficiently

---

## Migration to Production

### Backend Integration

Replace mock data in `company-service.ts`:

```typescript
static async fetchCompanies(): Promise<Company[]> {
  const response = await fetch('/api/companies')
  return response.json()
}
```

### Server-Side Filtering

```typescript
const response = await fetch(`/api/companies?search=${query}&industry=${industry}`)
```

### Potential Enhancements

* Company detail pages
* Favorites/bookmarks
* Export to CSV
* Advanced search
* Infinite scroll
* Real-time updates

---

## Summary

**What This Project Demonstrates**:

* Clean architecture with separation of concerns
* Type-safe TypeScript implementation
* Reusable custom hooks pattern
* Service layer for API abstraction
* Modern React best practices
* Production-ready code structure

**Tech Stack**:

* Next.js 15 (App Router)
* React 19
* TypeScript
* Tailwind CSS v4
* shadcn/ui components

**Key Features**:

* Search, filter, and sort companies
* Grid and table view modes
* Pagination (12 items per page)
* Loading and error states
* Responsive design
* Indian locations and currency (₹)

The codebase is modular, maintainable, and ready for production deployment or API integration.
