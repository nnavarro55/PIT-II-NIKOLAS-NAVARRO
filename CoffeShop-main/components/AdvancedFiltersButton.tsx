"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export function AdvancedFiltersButton({ isOpen, onClick }: Props) {
  const { t } = useLanguage();
  
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2"
    >
      {isOpen ? (
        <>
          {t('home.filters.hideAdvanced')}
          <ChevronUp className="h-4 w-4" />
        </>
      ) : (
        <>
          {t('home.filters.showAdvanced')}
          <ChevronDown className="h-4 w-4" />
        </>
      )}
    </Button>
  );
} 