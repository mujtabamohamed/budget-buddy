"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Check, ChevronDown, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const organizations = [
  {
    value: "originui",
    label: "Origin UI",
  },
  {
    value: "cruip",
    label: "Cruip",
  },
];

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("originui");

  return (
    <SignedIn>
    <div className="w-full flex h-[60px] bg-[#0f0f0f] border-b border-[#1a1a1a] text-[#ddd] items-center">
      {/* Left Section */}
      <div className="flex w-[250px] justify-center items-center h-[60px] border-r border-[#1f1f1f]">
        <h2 className="text-xl font-bold text-[#ddd]">Budget Buddy</h2>
      </div>
  
      {/* Main Section */}
      <div className="flex flex-1 items-center justify-between px-6">
        {/* Organization Selector */}
        <div className="space-y-2">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                id="select-42"
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[250px] justify-between bg-[#1a1a1a] px-3 font-normal outline-offset-0 text-[#ededed] hover:bg-[#1f1f1f] hover:text-[#ededed] border border-[#2a2a2a] focus:outline-none focus-visible:ring-0"
              >
                <span
                  className={cn("truncate", !value && "text-[#ededed]/60")}
                >
                  {value
                    ? organizations.find(
                        (organization) => organization.value === value
                      )?.label
                    : "Select organization"}
                </span>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 text-[#ededed]"
                  aria-hidden="true"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-full min-w-[var(--radix-popper-anchor-width)] border border-[#2a2a2a] p-0"
              align="start"
            >
              <Command>
                <CommandInput placeholder="Find organization" />
                <CommandList>
                  <CommandEmpty>No organization found.</CommandEmpty>
                  <CommandGroup>
                    {organizations.map((organization) => (
                      <CommandItem
                        key={organization.value}
                        value={organization.value}
                        onSelect={(currentValue: string) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        {organization.label}
                        {value === organization.value && (
                          <Check
                            size={16}
                            strokeWidth={2}
                            className="ml-auto"
                          />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup>
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-normal"
                    >
                      <Plus
                        size={16}
                        strokeWidth={2}
                        className="-ms-2 me-2 opacity-60"
                        aria-hidden="true"
                      />
                      New organization
                    </Button>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
  
        {/* Right Section */}
        <div>
          <UserButton />
        </div>
      </div>
    </div>
  </SignedIn>
  

  );
}

export default Navbar;
