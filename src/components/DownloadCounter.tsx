import { Download } from "lucide-react";

interface DownloadCounterProps {
  count: number;
  isLoading?: boolean;
}

const DownloadCounter = ({ count, isLoading }: DownloadCounterProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-pulse">
        <Download className="w-4 h-4" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-fade-in">
      <Download className="w-4 h-4" />
      <span className="font-medium">
        Downloaded <span className="text-foreground font-semibold">{count}+</span> times
      </span>
    </div>
  );
};

export default DownloadCounter;
