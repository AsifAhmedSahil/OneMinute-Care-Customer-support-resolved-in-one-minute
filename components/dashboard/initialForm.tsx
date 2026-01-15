'use client'

import { Building2, Globe, LinkIcon } from "lucide-react";

interface InitialData{
    businessName: string;
    websiteUrl: string;
    externalLinks: string;
}

const STEPS = [
    {
        id:"name",
        label:"Business Name",
        quesion:"What is the name of your business?",
        description:"This will be the identity of your AI assistant.",
        icon:Building2,
        placeholder:"e.g. Acme Corp",
        type:"text",
        field: "businessName" as keyof InitialData

    },
    {
        id:"website",
        label:"Website",
        quesion:"What is your website URL?",
        description:"we will scrape data from here to train your chatbot.",
        icon:Globe,
        placeholder:"https://acme.com",
        type:"url",
        field: "websiteUrl" as keyof InitialData

    },
    {
        id:"Links",
        label:"Extra Context",
        quesion:"Any other links to add?",
        description:"Add external links like notion pages or helps docs to.",
        icon:LinkIcon,
        placeholder:"https://notion.so/docs...",
        type:"textarea",
        badge:"Optional",
        field: "externalLinks" as keyof InitialData

    },
]

const InitialForm = () => {
  return (
    <div>InitialForm</div>
  )
}

export default InitialForm