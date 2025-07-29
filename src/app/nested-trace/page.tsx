//http://localhost:3000/nested-trace
import { ChildComponent } from "./ChildComponent";
export default function Page() {
  // Assume instrumentation adds data-testparty="root-123" at this JSX line, recorded in allNodes with this file's URI/line/column
  return (
    <div>
      <ChildComponent />
    </div>
  );
};