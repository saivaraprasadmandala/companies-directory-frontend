import type { Company } from "@/types/company"
import { mockCompanies } from "@/lib/data/companies"
import { LOADING_DELAY } from "@/lib/constants"

/**
 * Company Service
 * Abstraction layer for company data operations
 * In production, replace mock data with actual API calls
 */

export class CompanyService {
  /**
   * Fetch all companies
   * Simulates API call with delay
   */
  static async fetchCompanies(): Promise<Company[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, LOADING_DELAY))

    // In production, replace with:
    // const response = await fetch('/api/companies')
    // return response.json()

    return mockCompanies
  }

  /**
   * Fetch a single company by ID
   */
  static async fetchCompanyById(id: string): Promise<Company | null> {
    await new Promise((resolve) => setTimeout(resolve, LOADING_DELAY))

    const company = mockCompanies.find((c) => c.id === id)
    return company || null
  }

  /**
   * Search companies (server-side filtering simulation)
   * In production, this would be handled by the backend
   */
  static async searchCompanies(query: string): Promise<Company[]> {
    await new Promise((resolve) => setTimeout(resolve, LOADING_DELAY))

    return mockCompanies.filter(
      (company) =>
        company.name.toLowerCase().includes(query.toLowerCase()) ||
        company.description.toLowerCase().includes(query.toLowerCase()),
    )
  }
}
