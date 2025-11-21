import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FlaskConical } from "lucide-react";

const Evaluation = () => {
  const testResults = [
    { test: "pH Value", result: "7.2", standard: "6.5 - 8.0", status: "Pass" },
    { test: "Abrasiveness", result: "Low", standard: "Low to Medium", status: "Pass" },
    { test: "Foamability", result: "Good", standard: "Adequate", status: "Pass" },
    { test: "Spreadability", result: "Excellent", standard: "Good", status: "Pass" },
    { test: "Stability (30 days)", result: "Stable", standard: "Stable", status: "Pass" },
    { test: "Microbial Load", result: "Within limits", standard: "<100 CFU/g", status: "Pass" },
  ];

  return (
    <section id="evaluation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Evaluation & Testing
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive quality assessment to ensure safety and efficacy
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 shadow-xl animate-fade-in animate-delay-100">
            <div className="flex items-center gap-3 mb-6">
              <FlaskConical className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">
                Test Results Summary
              </h3>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Test Parameter</TableHead>
                    <TableHead className="font-semibold">Observed Result</TableHead>
                    <TableHead className="font-semibold">Standard Range</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {testResults.map((row, index) => (
                    <TableRow key={index} className="hover:bg-muted/30">
                      <TableCell className="font-medium">{row.test}</TableCell>
                      <TableCell>{row.result}</TableCell>
                      <TableCell className="text-foreground/70">{row.standard}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                          {row.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-sm text-foreground/80">
                <strong>Conclusion:</strong> All evaluation parameters meet the required
                standards. The formulated herbal toothpaste demonstrates excellent
                physicochemical properties, appropriate consistency, and satisfactory
                antimicrobial activity.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
