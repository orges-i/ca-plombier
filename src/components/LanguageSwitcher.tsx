import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-md bg-muted p-1">
      <Button
        variant={language === "fr" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("fr")}
        className="text-xs font-semibold"
      >
        FR
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="text-xs font-semibold"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
