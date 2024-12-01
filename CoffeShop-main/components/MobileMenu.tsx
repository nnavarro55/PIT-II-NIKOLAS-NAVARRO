import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/lib/language-provider";

export function MobileMenu() {
  const { t } = useLanguage();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-lg font-medium transition-colors hover:text-[#FF8000]"
          >
            {t('header.title')}
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium transition-colors hover:text-[#FF8000]"
          >
            {t('header.about')}
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium transition-colors hover:text-[#FF8000]"
          >
            {t('header.contact')}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
} 