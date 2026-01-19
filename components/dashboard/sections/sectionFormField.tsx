import React from 'react'

type Tone = "strict" | "neutral" | "friendly" | "empathetic";



interface SectionFormFieldProps {
    formData:FormData;
    setFormData:(data:FormData)=> void;
    selectedSources: string[];
    setSelectedSource:(sources:string[]) => void;
    knowledgeSources:KnowledgeSource[];
    isLoadingSources:boolean;
    isDisabled:boolean;

}

const SectionFormField = ({formData,setFormData,selectedSources,setSelectedSource,knowledgeSources,isLoadingSources,isDisabled}:SectionFormFieldProps) => {
  return (
    <div>
      
    </div>
  )
}

export default SectionFormField
