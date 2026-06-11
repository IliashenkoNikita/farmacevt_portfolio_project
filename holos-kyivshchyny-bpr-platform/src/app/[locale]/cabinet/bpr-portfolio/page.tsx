import { CabinetDemoActionForm } from "@/components/demo/action-forms";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <h1>BPR Portfolio</h1>
      <Card>
        <p>Review accumulated BPR/CPD points and certificate history.</p>
        <CabinetDemoActionForm
          intent="portfolio-refresh"
          label="Refresh portfolio"
          redirectTo="/uk/cabinet/bpr-portfolio"
        />
      </Card>
    </>
  );
}
