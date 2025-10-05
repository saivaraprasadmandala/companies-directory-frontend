"use client"

import { Button } from "@/components/ui/button"
import { LayoutGrid, Table } from "lucide-react"

interface ViewToggleProps {
  view: "grid" | "table"
  onViewChange: (view: "grid" | "table") => void
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex gap-1 border rounded-lg p-1 bg-card">
      <Button
        variant={view === "grid" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => onViewChange("grid")}
        className="gap-2"
      >
        <LayoutGrid className="h-4 w-4" />
        <span className="hidden sm:inline">Grid</span>
      </Button>
      <Button
        variant={view === "table" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => onViewChange("table")}
        className="gap-2"
      >
        <Table className="h-4 w-4" />
        <span className="hidden sm:inline">Table</span>
      </Button>
    </div>
  )
}
