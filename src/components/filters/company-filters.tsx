"use client"

import { SearchInput } from "./search-input"
import { FilterSelect } from "./filter-select"
import { industries, locations } from "@/lib/data/companies"

interface CompanyFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  selectedIndustry: string
  onIndustryChange: (value: string) => void
  selectedLocation: string
  onLocationChange: (value: string) => void
}

/**
 * Company-specific filters component
 * Combines search and filter controls
 */
export function CompanyFilters({
  searchQuery,
  onSearchChange,
  selectedIndustry,
  onIndustryChange,
  selectedLocation,
  onLocationChange,
}: CompanyFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <SearchInput value={searchQuery} onChange={onSearchChange} placeholder="Search companies..." />

      <FilterSelect
        value={selectedIndustry}
        onChange={onIndustryChange}
        options={industries}
        placeholder="Industry"
        className="w-full sm:w-[200px] bg-card"
      />

      <FilterSelect
        value={selectedLocation}
        onChange={onLocationChange}
        options={locations}
        placeholder="Location"
        className="w-full sm:w-[200px] bg-card"
      />
    </div>
  )
}
