"use client";
import SectionFormField from "@/components/dashboard/sections/sectionFormField";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import React, { useState } from "react";

type SectionStatus = "active" | "draft" | "disabled";
type Tone = "strict" | "neutral" | "friendly" | "empathetic";

interface Section {
  id: string;
  name: string;
  description: string;
  sourceCount: number;
  source_ids?: string[];
  tone: Tone;
  scopeLabel: string;
  allowed_topic?: string;
  blocked_topic?: string;
  status: SectionStatus;
}

interface knowledgeSource {
  id: string;
  name: string;
  type: string;
  status: string;
}

interface FormData {
  name: string;
  description: string;
  tone: Tone;
  allowedTopics: string;
  blockedTopics: string;
  fallbackBehaviour: string;
}

const INITIAL_FORM_DATA: FormData = {
  name: "",
  description: "",
  tone: "neutral",
  allowedTopics: "",
  blockedTopics: "",
  fallbackBehaviour: "escalate",
};

const page = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [knowledgeSources, setKnowledgeSources] = useState<KnowledgeSource[]>(
    [],
  );
  const [selectedSource, setSelectedSource] = useState<string[]>([]);
  const [isLoadingSources, setIsLoadingSources] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [sections, setSections] = useState<Section[]>([]);
  const [isLoadingSections, setIsLoadingSections] = useState(true);

  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);

  const handleCreateSection = async () => {
    setSelectedSection({
        id:"new",
        name:"",
        description:"",
        sourceCount:0,
        tone:"neutral",
        scopeLabel:"",
        status:"draft"
    })
    setSelectedSource([])
    setFormData(INITIAL_FORM_DATA)
    setIsSheetOpen(true)
  };

  const isPreviewMode = selectedSection?.id !== "new"
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Sections</h1>
          <p className="text-zinc-400 mt-1">
            Define behaviour and tone for different topics
          </p>
        </div>

        <Button
          onClick={handleCreateSection}
          className="bg-white text-black hover:bg-zinc-200"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Section
        </Button>
      </div>

      <Card className="border-white/5 bg-[#0A0A0E]">
        <CardContent className="p-0"></CardContent>
      </Card>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full sm:max-w-md  border-white/10 bg-black ">
          {selectedSection && (
            <>
              <SheetHeader className="p-6 border-6 border-white/5">
                <SheetTitle className="text-xl text-white">
                  {selectedSection.id === "new"
                    ? "Create Section"
                    : "View Section"}
                </SheetTitle>

                <SheetDescription className="text-zinc-500">
                    Configure how the AI behaves for the specific topic.
                </SheetDescription>
              </SheetHeader>

              <div className="flex-1 overflow-auto p-6 space-y-8">
                <SectionFormField
                formData={formData}
                setFormData={setFormData}
                selectedSources={selectedSource}
                setSelectedSources={setSelectedSource}
                knowledgeSources={knowledgeSources}
                isLoadingSources={isLoadingSources}
                isDsiabled={isPreviewMode}
                />


              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default page;
