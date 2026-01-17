import { isAuthorized } from "@/lib/isAuthorized";
import { summarizeMarkdown } from "@/lib/openAI";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
    try {
        const user = isAuthorized();
        if(!user){
            return NextResponse.json({error:"Unauthorized"},{status:401})
        }

        const contentType = req.headers.get("content-type") || "";

        let type: string;
        let body:any = {}

        if(contentType.includes("multipart/form-data")){
            const formData = await req.formData()
            type = formData.get("type") as string

            if(type === "upload"){
                const file = formData.get("file") as File;

                if(!file){
                    return NextResponse.json(
                        {error:"No File Upload"},
                        {status: 400}

                    )
                }

                const fileContent = await file.text()
                const lines = fileContent.split("\n").filter((line)=> line.trim())

                const headers  =lines[0]?.split(",").map((h) => h.trim())

                let formattedContent:any = "";

                const markdown = await summarizeMarkdown(fileContent);
                formattedContent = markdown;

            } else{
                body  =await req.json(),
                type = body.type;
            }



        }
    } catch (error) {
        
    }
    
}