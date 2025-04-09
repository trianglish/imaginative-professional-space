
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
      <p className="mb-6">Sorry, the case study you're looking for doesn't exist.</p>
      <Button asChild>
        <a href="/#portfolio">Back to Portfolio</a>
      </Button>
    </div>
  );
};

export default NotFound;
