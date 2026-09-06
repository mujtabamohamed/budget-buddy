"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WorkspacePage() {
  const router = useRouter();
  const [selectedWorkspace, setSelectedWorkspace] = useState("");

  const workspaces = [
    { id: "1", name: "Personal" },
    { id: "2", name: "Family" },
    { id: "3", name: "Business" }
  ];

  const handleWorkspaceSelect = (workspaceId: string) => {
    router.push(`/workspace/${workspaceId}/dashboard`);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-8">Select Workspace</h1>
        <div className="grid gap-4">
          {workspaces.map((workspace) => (
            <div
              key={workspace.id}
              onClick={() => handleWorkspaceSelect(workspace.id)}
              className="p-6 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] cursor-pointer hover:bg-[#2a2a2a]"
            >
              <h2 className="text-xl font-medium">{workspace.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}