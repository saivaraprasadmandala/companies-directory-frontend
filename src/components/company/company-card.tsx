import type { Company } from "@/types/company"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Calendar, DollarSign, ExternalLink } from "lucide-react"
import Image from "next/image"

interface CompanyCardProps {
  company: Company
}

/**
 * Company Card Component
 * Displays company information in a card layout
 */
export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
            <Image
              src={company.logo || "/placeholder.svg"}
              alt={`${company.name} logo`}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg text-balance">{company.name}</CardTitle>
            <CardDescription className="flex items-center gap-1 mt-1">
              <ExternalLink className="h-3 w-3" />
              {company.website}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{company.description}</p>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            {company.industry}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{company.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 flex-shrink-0" />
            <span>{company.employees.toLocaleString()} employees</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span>Founded {company.founded}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <DollarSign className="h-4 w-4 flex-shrink-0" />
            <span>{company.revenue} revenue</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
