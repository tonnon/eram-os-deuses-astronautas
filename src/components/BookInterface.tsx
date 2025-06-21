
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { BookNavigation } from "./BookNavigation";
import { ChapterContent } from "./ChapterContent";

interface BookInterfaceProps {
  onClose: () => void;
}

export const BookInterface = ({ onClose }: BookInterfaceProps) => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);

  const chapters = [
    { title: "Os Monumentos Impossíveis", id: "monuments" },
    { title: "Astronautas Antigos e OVNIs", id: "astronauts" },
    { title: "Os Deuses do Espaço", id: "gods" },
    { title: "Pirâmides e Mapas Estelares", id: "pyramids" },
    { title: "As Linhas de Nazca", id: "nazca" },
    { title: "Encontros Bíblicos", id: "biblical" },
    { title: "Tábuas Sumérias", id: "sumerian" },
    { title: "Mistérios da Ilha de Páscoa", id: "easter" },
    { title: "Tecnologia Antiga Avançada", id: "technology" },
    { title: "O Retorno dos Deuses", id: "return" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zM10 10c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between p-6 bg-black/50 backdrop-blur-sm border-b border-amber-400/20">        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowNavigation(!showNavigation)}
            className="text-amber-400 hover:bg-amber-400/20 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-amber-400">Eram os Deuses Astronautas?</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-slate-300">
            Capítulo {currentChapter + 1} de {chapters.length}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-amber-400 hover:bg-amber-400/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Navigation Sidebar */}
        <BookNavigation 
          chapters={chapters}
          currentChapter={currentChapter}
          onChapterSelect={setCurrentChapter}
          isVisible={showNavigation}
          onClose={() => setShowNavigation(false)}
        />

        {/* Main Content */}
        <main className="flex-1 relative">
          <ChapterContent 
            chapter={chapters[currentChapter]}
            chapterIndex={currentChapter}
          />
        </main>
      </div>
    </div>
  );
};
