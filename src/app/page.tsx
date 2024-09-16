import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex items-center flex-col min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">
        AI Content Generator App Using Next.js
      </h1>

      <SignInButton>
        <Button variant="outline">Sign In</Button>
      </SignInButton>
    </div>
  );
}
