"use client"

import { useCompanies } from "@/hooks/use-companies"
import { CompanyList } from "@/components/company/company-list"
import { LoadingState } from "@/components/loading-state"
import { ErrorState } from "@/components/error-state"

/**
 * Home page component
 * Displays the companies directory with loading and error states
 * Header and Footer are now handled by app/layout.tsx
 */
export default function Home() {
  const { companies, isLoading, error, retry } = useCompanies()

  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading ? <LoadingState /> : error ? <ErrorState onRetry={retry} /> : <CompanyList companies={companies} />}
    </div>
  )
}
