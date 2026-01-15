import { Metadata } from "next";
import { cookies } from "next/headers";


export const metadata: Metadata = {
  title: "OneMinute - Care | Customer support, resolved in one minute.",
  description: "Customer support, resolved in one minute.",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const cookieStore = await cookies()
    const metadataCookie = cookieStore.get("metadata")

    return (
        <div className="bg-[#050509] min-h-screen flex flex-col p-0 antialiased text-zinc-100 selection:bg-zinc-800 font-sans">
            {
                metadataCookie?.value ? 
                <>
                {children}
                </>
                :
                children
            }



        </div>
    )

}