//http://localhost:3000/marquee

declare global {
    namespace JSX {
        interface IntrinsicElements {
            marquee: React.DetailedHTMLProps<any,any>;
        }
    }
}
export default function Page() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Deprecated Marquee Example</h1>
      <p>This page contains a <code>&lt;marquee&gt;</code> element, which is deprecated.</p>

      {/* ❌ Accessibility Error: Deprecated <marquee> tag */}
      <marquee behavior="scroll" direction="left">
        This is a scrolling message using a deprecated tag.
      </marquee>

      <p className="mt-4">Replace <code>&lt;marquee&gt;</code> with a modern alternative like CSS animations.</p>
    </main>
  );
}