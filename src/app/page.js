import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";

export default function Home() {
  return (
    <>
    <div className="flex w-full min-h-screen items-center justify-center">
      <Terminal>
          <TypingAnimation>&gt; npm install coffeecodecommunity</TypingAnimation>
        
          <AnimatedSpan className="text-green-500">✔ UI/UX checks.</AnimatedSpan>
        
          <AnimatedSpan className="text-green-500">
            ✔ Development Checks.
          </AnimatedSpan>
        
          <TypingAnimation className="text-muted-foreground">
            Web Sedang Dalam Tahap Pembuatan
          </TypingAnimation>
        </Terminal>
    </div>

    </>
  );
}
