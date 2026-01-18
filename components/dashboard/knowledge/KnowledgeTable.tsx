import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Filter, Search } from "lucide-react";
import React from "react";

interface knowledgeTableProps {
  sources: KnowledgeSource[];
  onSourceClick: (source: KnowledgeSource) => void;
  isLoading: boolean;
}

const KnowledgeTable = ({
  sources,
  onSourceClick,
  isLoading,
}: knowledgeTableProps) => {
  return (
    <Card className="border-white/5 bg-[#0a0a0e]">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium text-white">
            Sources
          </CardTitle>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-400"></Search>
              <Input
                className="pl-9 h-9 w-50 md:w-75 bg-white/2 border-white/20 text-sm text-white"
                placeholder="Search sources..."
              />
            </div>
            <Button variant={"ghost"} size={"icon"} className="text-zinc-400 hover:text-white hover:bg-white/20 ">
<Filter className="w-4 h-4"/>
            </Button>
          </div>
        </div>


      </CardHeader>

      <CardContent className="p-0">
        <Table>
            <TableHeader>
                <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="text-xs uppercase font-medium text-zinc-500">
                    Name
                </TableHead>
                <TableHead className="text-xs uppercase font-medium text-zinc-500">
                    Type
                </TableHead>
                <TableHead className="text-xs uppercase font-medium text-zinc-500">
                    Status 
                </TableHead>
                <TableHead className="text-xs uppercase font-medium text-zinc-500">
                    Last Updated 
                </TableHead>
                <TableHead className="text-xs uppercase font-medium text-zinc-500">
                    Actions 
                </TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {/* {
                    isLoading ? (
                        Array.from({length:5})
                    )
                } */}
            </TableBody>
        </Table>

      </CardContent>
    </Card>
  );
};

export default KnowledgeTable;
