import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Check,
  FileText,
  Globe,
  Loader2,
  MoreHorizontal,
  Plus,
  Upload,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardOverview = () => {
  const [data, setData] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [origin, setOrigin] = useState("");

  const router = useRouter()

  useEffect(() => {
    setOrigin(window.location.origin);

    fetch("/api/overview")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const handleCopy = () => {};

  if (isLoading) {
    return (
      <div className="p-8 flex items-center justify-center text-zinc-500">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!data) return null;

  const { knowledge, sections, chats, counts } = data;

  const setupSteps = [
    { label: "Website Scanned", complete: true, href: "#" },
    {
      label: "Knowledge Added",
      complete: counts.knowledge > 0,
      href: "/dashboard/knowledge",
    },
    {
      label: "Sections Configured",
      complete: counts.sections > 0,
      href: "/dashboard/sections",
    },
    {
      label: "Widget Installed",
      complete: counts.knowledge > 0,
      href: "#widget",
    },
  ];

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      <section className="space-y-4">
        <h3 className="text-lg font-medium text-white">Setup Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {setupSteps.map((step, i) => (
            <Link key={i} href={step.href} className="block group">
              <Card
                className={cn(
                  "border-white/5 bg-white/2 hover:bg-white/4 transition-colors",
                  step.complete
                    ? "opacity-60"
                    : "border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-700/10",
                )}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <span
                    className={cn(
                      "text-sm font-medium",
                      step.complete ? " text-zinc-500" : "text-white",
                    )}
                  >
                    {step.label}
                  </span>
                  {step.complete ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-white/5 bg-black">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium text-white">
                Knowledge Base
              </CardTitle>
              <Button
                variant={"outline"}
                size={"sm"}
                className="h-8 text-xs border-white/10 bg-transparent text-zinc-400 hover:text-white hover:bg-white/12"
                asChild
              >
                <Link href={"/dashboard/knowledge"}>Manage Sources</Link>
              </Button>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
              <div className="p-3 rounded-lg bg-white/2 border border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-4 h-5 text-blue-400" />
                  <span className="text-xs text-zinc-500 font-medium">
                    Pages
                  </span>
                </div>
                <span className="text-2xl font-semibold text-white">
                  {knowledge.website || 0}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-white/2 border border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-5 text-purple-400" />
                  <span className="text-xs text-zinc-500 font-medium">
                    Manual Texts
                  </span>
                </div>
                <span className="text-2xl font-semibold text-white">
                  {knowledge.docs || 0}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-white/2 border border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <Upload className="w-4 h-5 text-emerald-400" />
                  <span className="text-xs text-zinc-500 font-medium">
                    Uploads
                  </span>
                </div>
                <span className="text-2xl font-semibold text-white">
                  {knowledge.upload || 0}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/5 bg-black min-h-90">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium text-white">
                  Sections
                </CardTitle>
                <CardDescription>
                  configure beahviour for different topics.
                </CardDescription>
              </div>

              <Button
                variant={"outline"}
                size={"sm"}
                className="h-8 text-xs border-white/10 bg-white text-black font-semibold hover:text-white hover:bg-black"
                asChild
              >
                <Link href={"/dashboard/sections"}>
                  <Plus className="w-3 h-3" />
                  Create Section
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-white/5">
                {sections.list.length === 0 ? (
                  <div className="p-6 text-center text-sm text-zinc-600">
                    No sections configured yet
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-12 gap-4 px-6 py-2 bg-white/2 text-[10px] text-zinc-500 uppercase tracking-wider font-medium">
                      <div className="col-span-5">Name</div>
                      <div className="col-span-3">Source</div>
                      <div className="col-span-3">Tone</div>
                      <div className="col-span-1"></div>
                    </div>

                    {sections?.list.map((section: any, i: number) => (
                      <div
                        key={i}
                        className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 items-center hover:bg-white/2 transition-colors "
                      >
                        <div className="col-span-5 text-sm font-medium text-zinc-200">
                          {section.name}
                        </div>
                        <div className="col-span-3 text-sm text-zinc-500">
                          {section.sourceCount} sources
                        </div>
                        <div className="col-span-3">
                          <Badge
                            variant={"secondary"}
                            className="bg-white/5 text-zinc-400 hover:bg-white/10 border-white/5 rounded-lg font-normal"
                          >
                            {section.tone}
                          </Badge>
                        </div>

                        <div className="col-span-1 flex justify-end">
                            <Button variant={"ghost"} size={"icon"} className="h-6 w-6 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={()=>router.push("/dashboard/sections")}
                            >
                                <MoreHorizontal className="w-4 h-4"/>
                            </Button>

                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
