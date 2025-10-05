import { Building2 } from "lucide-react"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="rounded-full bg-muted p-6 mb-4">
        <Building2 className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">No companies found</h3>
      <p className="text-muted-foreground max-w-md text-pretty">
        Try adjusting your filters or search query to find what you're looking for.
      </p>
    </div>
  )
}
