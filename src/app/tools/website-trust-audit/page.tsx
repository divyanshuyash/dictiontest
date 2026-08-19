import ToolLandingPage, { toolMetadata } from "@/components/ToolLandingPage";
import { auditTools } from "@/lib/toolContent";
const tool = auditTools["website-trust-audit"];
export const metadata = toolMetadata(tool);
export default function Page() { return <ToolLandingPage tool={tool} />; }
