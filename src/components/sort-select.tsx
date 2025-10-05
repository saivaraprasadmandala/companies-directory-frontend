"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown } from "lucide-react"
import type { SortOption } from "@/types/filters"

interface SortSelectProps {
  sortBy: SortOption
  onSortChange: (value: SortOption) => void
}

export function SortSelect({ sortBy, onSortChange }: SortSelectProps) {
  return (
    <Select value={sortBy} onValueChange={onSortChange}>
      <SelectTrigger className="w-full sm:w-[180px] bg-card">
        <ArrowUpDown className="h-4 w-4 mr-2" />
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="name-asc">Name (A-Z)</SelectItem>
        <SelectItem value="name-desc">Name (Z-A)</SelectItem>
        <SelectItem value="employees-desc">Most Employees</SelectItem>
        <SelectItem value="employees-asc">Least Employees</SelectItem>
        <SelectItem value="founded-desc">Newest</SelectItem>
        <SelectItem value="founded-asc">Oldest</SelectItem>
      </SelectContent>
    </Select>
  )
}
