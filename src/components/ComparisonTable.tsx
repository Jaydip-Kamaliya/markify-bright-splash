import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const comparisonData = [
  { feature: "Daily Watermarks", free: "10 per day", pro: "Unlimited ∞" },
  { feature: "Text Watermarks", free: true, pro: true },
  { feature: "Logo Watermarks", free: true, pro: true },
  { feature: "Batch Processing", free: true, pro: true },
  { feature: "Rotation Controls", free: true, pro: true },
  { feature: "Auto Color Contrast", free: true, pro: true },
  { feature: "Shape Options", free: true, pro: true },
  { feature: "Offline Use", free: true, pro: true },
  { feature: "Priority Support", free: false, pro: true },
  { feature: "Lifetime Updates", free: false, pro: true },
  { feature: "Price", free: "Free", pro: "₹199 one-time" },
];

const ComparisonTable = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Free vs Pro Comparison
          </h2>
          <p className="text-lg text-muted-foreground">
            See what's included in each plan
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="text-foreground font-bold text-base">Feature</TableHead>
                  <TableHead className="text-center text-foreground font-bold text-base">Free</TableHead>
                  <TableHead className="text-center text-foreground font-bold text-base">Pro</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={row.feature} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <TableCell className="font-medium text-foreground">{row.feature}</TableCell>
                    <TableCell className="text-center">
                      {typeof row.free === "boolean" ? (
                        row.free ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-foreground">{row.free}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-primary font-semibold">{row.pro}</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="premium" size="xl" className="min-w-[280px]" asChild>
              <a href="https://jaydipkamaliya.gumroad.com/l/markify-pro" target="_blank" rel="noopener noreferrer">
                Upgrade to Pro Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
