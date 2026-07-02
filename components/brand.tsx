import { Workflow } from "lucide-react";

/** FlowForge wordmark + logo. */
export function Brand({ href = "#" }: { href?: string }) {
  return (
    <a href={href} className="flex items-center gap-2 font-semibold">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
        <Workflow className="h-4 w-4" />
      </span>
      FlowForge
    </a>
  );
}
