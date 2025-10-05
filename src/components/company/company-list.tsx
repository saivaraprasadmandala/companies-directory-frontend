"use client"

import { useState } from "react"
import type { Company } from "@/types/company"
import type { ViewMode, SortOption } from "@/types/filters"
import { CompanyCard } from "./company-card"
import { CompanyTable } from "./company-table"
import { CompanyFilters } from "@/components/filters/company-filters"
import { ViewToggle } from "../view-toggle"
import { SortSelect } from "../sort-select"
import { Pagination } from "../pagination"
import { EmptyState } from "../empty-state"
import { useCompanyFilters } from "@/hooks/use-companies"
import { usePagination } from "@/hooks/use-pagination"
import { DEFAULT_INDUSTRY, DEFAULT_LOCATION, DEFAULT_SORT, DEFAULT_VIEW, ITEMS_PER_PAGE } from "@/lib/constants"

interface CompanyListProps {
  companies: Company[]
}

/**
 * Main company list component
 * Orchestrates filtering, sorting, pagination, and view modes
 */
export function CompanyList({ companies }: CompanyListProps) {
  // Filter state
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState(DEFAULT_INDUSTRY)
  const [selectedLocation, setSelectedLocation] = useState(DEFAULT_LOCATION)
  const [sortBy, setSortBy] = useState<SortOption>(DEFAULT_SORT)

  // View state
  const [view, setView] = useState<ViewMode>(DEFAULT_VIEW)

  // Apply filters and sorting
  const filteredCompanies = useCompanyFilters(companies, {
    searchQuery,
    industry: selectedIndustry,
    location: selectedLocation,
    sortBy,
  })

  // Apply pagination
  const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filteredCompanies, ITEMS_PER_PAGE)

  return (
    <div className="space-y-6">
      {/* Filters */}
      <CompanyFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedIndustry={selectedIndustry}
        onIndustryChange={setSelectedIndustry}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
      />

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {filteredCompanies.length} {filteredCompanies.length === 1 ? "company" : "companies"} found
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <SortSelect sortBy={sortBy} onSortChange={setSortBy} />
          <ViewToggle view={view} onViewChange={setView} />
        </div>
      </div>

      {/* Content */}
      {paginatedItems.length === 0 ? (
        <EmptyState />
      ) : view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedItems.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      ) : (
        <CompanyTable companies={paginatedItems} />
      )}

      {/* Pagination */}
      {paginatedItems.length > 0 && totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
      )}
    </div>
  )
}
