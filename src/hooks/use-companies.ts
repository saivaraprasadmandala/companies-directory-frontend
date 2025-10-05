"use client"

import { useState, useMemo, useEffect } from "react"
import type { Company } from "@/types/company"
import type { CompanyFilters } from "@/types/filters"
import { CompanyService } from "@/services/company-service"
import { DEFAULT_INDUSTRY, DEFAULT_LOCATION } from "@/lib/constants"

/**
 * Custom hook for managing company data and filtering
 * Encapsulates all business logic for company operations
 */
export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  // Fetch companies on mount
  useEffect(() => {
    fetchCompanies()
  }, [])

  const fetchCompanies = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await CompanyService.fetchCompanies()
      setCompanies(data)
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch companies"))
    } finally {
      setIsLoading(false)
    }
  }

  const retry = () => {
    fetchCompanies()
  }

  return {
    companies,
    isLoading,
    error,
    retry,
  }
}

/**
 * Custom hook for filtering and sorting companies
 * Separates filtering logic from component
 */
export function useCompanyFilters(companies: Company[], filters: CompanyFilters) {
  return useMemo(() => {
    let filtered = [...companies]

    // Apply search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      filtered = filtered.filter(
        (company) => company.name.toLowerCase().includes(query) || company.description.toLowerCase().includes(query),
      )
    }

    // Apply industry filter
    if (filters.industry !== DEFAULT_INDUSTRY) {
      filtered = filtered.filter((company) => company.industry === filters.industry)
    }

    // Apply location filter
    if (filters.location !== DEFAULT_LOCATION) {
      filtered = filtered.filter((company) => company.location === filters.location)
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        case "employees-asc":
          return a.employees - b.employees
        case "employees-desc":
          return b.employees - a.employees
        case "founded-asc":
          return a.founded - b.founded
        case "founded-desc":
          return b.founded - a.founded
        default:
          return 0
      }
    })

    return filtered
  }, [companies, filters])
}
