"use client"

import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface ErrorStateProps {
  onRetry?: () => void
}

export function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Alert variant="destructive" className="max-w-md">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error Loading Companies</AlertTitle>
        <AlertDescription className="mt-2 space-y-4">
          <p>There was an error loading the company data. Please try again.</p>
          {onRetry && (
            <Button onClick={onRetry} variant="outline" size="sm">
              Retry
            </Button>
          )}
        </AlertDescription>
      </Alert>
    </div>
  )
}
