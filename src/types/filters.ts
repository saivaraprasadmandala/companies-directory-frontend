/**
 * Filter-related type definitions
 */

export type SortOption = "name-asc" | "name-desc" | "employees-asc" | "employees-desc" | "founded-asc" | "founded-desc"

export type ViewMode = "grid" | "table"

export interface CompanyFilters {
  searchQuery: string
  industry: string
  location: string
  sortBy: SortOption
}

export interface FilterOptions {
  industries: string[]
  locations: string[]
}
