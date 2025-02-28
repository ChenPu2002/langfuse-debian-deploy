import { useRouter } from "next/router";

import { FullScreenPage } from "@/src/components/layouts/full-screen-page";
import Header from "@/src/components/layouts/header";
import ModelTable from "@/src/components/table/use-cases/models";
import { Button } from "@/src/components/ui/button";
import { UpsertModelFormDrawer } from "@/src/features/models/components/UpsertModelFormDrawer";
import { usePostHogClientCapture } from "@/src/features/posthog-analytics/usePostHogClientCapture";
import { useHasProjectAccess } from "@/src/features/rbac/utils/checkProjectAccess";

export default function ModelsPage() {
  const router = useRouter();
  const projectId = router.query.projectId as string;
  const hasWriteAccess = useHasProjectAccess({
    projectId,
    scope: "models:CUD",
  });
  const capture = usePostHogClientCapture();
  return (
    <FullScreenPage>
      <Header
        title="Models"
        help={{
          description:
            "A model represents a LLM model. It is used to calculate tokens and cost.",
          href: "https://langfuse.com/docs/model-usage-and-cost",
        }}
        actionButtons={
          <UpsertModelFormDrawer {...{ projectId, action: "create" }}>
            <Button
              variant="secondary"
              disabled={!hasWriteAccess}
              onClick={() => capture("models:new_form_open")}
            >
              Add model definition
            </Button>
          </UpsertModelFormDrawer>
        }
      />
      <ModelTable projectId={projectId} />
    </FullScreenPage>
  );
}
