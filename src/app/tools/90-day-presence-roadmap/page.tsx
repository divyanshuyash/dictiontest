import ToolLandingPage, { toolMetadata } from "@/components/ToolLandingPage";
import { auditTools } from "@/lib/toolContent";
const tool = auditTools["90-day-presence-roadmap"];
export const metadata = toolMetadata(tool);
export default function Page() { return <ToolLandingPage tool={tool} />; }
