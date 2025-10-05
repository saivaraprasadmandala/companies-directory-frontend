import type { Company } from "@/types/company"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface CompanyTableProps {
  companies: Company[]
}

/**
 * Company Table Component
 * Displays companies in a table layout with sortable columns
 */
export function CompanyTable({ companies }: CompanyTableProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-[300px]">Company</TableHead>
            <TableHead>Industry</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Employees</TableHead>
            <TableHead className="text-right">Founded</TableHead>
            <TableHead className="text-right">Revenue</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id} className="hover:bg-muted/30">
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-foreground">{company.name}</div>
                    <div className="text-sm text-muted-foreground truncate">{company.website}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {company.industry}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{company.location}</TableCell>
              <TableCell className="text-right text-muted-foreground">{company.employees.toLocaleString()}</TableCell>
              <TableCell className="text-right text-muted-foreground">{company.founded}</TableCell>
              <TableCell className="text-right font-medium text-foreground">{company.revenue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
