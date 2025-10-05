/**
 * Application-wide constants
 * Centralized configuration for easy maintenance
 */

// Pagination
export const ITEMS_PER_PAGE = 9

// Loading simulation (for demo purposes)
export const LOADING_DELAY = 1000

// Filter defaults
export const DEFAULT_INDUSTRY = "All Industries"
export const DEFAULT_LOCATION = "All Locations"
export const DEFAULT_SORT = "name-asc" as const
export const DEFAULT_VIEW = "grid" as const

// Sort options for UI
export const SORT_OPTIONS = [
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "employees-asc", label: "Employees (Low to High)" },
  { value: "employees-desc", label: "Employees (High to Low)" },
  { value: "founded-asc", label: "Founded (Oldest)" },
  { value: "founded-desc", label: "Founded (Newest)" },
] as const
