
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Chapter {
  title: string;
  id: string;
}

interface BookNavigationProps {
  chapters: Chapter[];
  currentChapter: number;
  onChapterSelect: (index: number) => void;
  isVisible: boolean;
  onClose: () => void;
}

export const BookNavigation = ({ 
  chapters, 
  currentChapter, 
  onChapterSelect, 
  isVisible, 
  onClose 
}: BookNavigationProps) => {
  return (
    <>
      {/* Overlay */}
      {isVisible && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-100vh w-80 bg-gradient-to-b from-slate-900 to-black border-r border-amber-400/20 z-40 transform transition-transform duration-300 lg:relative lg:translate-x-0",
        isVisible ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 pt-20 lg:pt-6">
          <h2 className="text-xl font-bold text-amber-400 mb-6">Índice</h2>
          
          <nav className="space-y-2">
            {chapters.map((chapter, index) => (
              <Button
                key={chapter.id}
                variant="ghost"
                onClick={() => {
                  onChapterSelect(index);
                  onClose();
                }}
                className={cn(
                  "w-full justify-start text-left p-4 h-auto hover:bg-amber-400/20 transition-all duration-200",
                  currentChapter === index 
                    ? "bg-amber-400/30 text-amber-400 border-l-4 border-amber-400" 
                    : "text-slate-300 hover:text-amber-400"
                )}
              >
                <div>
                  <div className="text-xs opacity-70 mb-1">Capítulo {index + 1}</div>
                  <div className="text-sm font-medium">{chapter.title}</div>
                </div>
              </Button>
            ))}
          </nav>
          
          <div className="mt-8 p-4 bg-amber-400/10 rounded-lg border border-amber-400/20">
            <h3 className="text-amber-400 font-semibold mb-2">Sobre o Livro</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Explore a teoria controversa de que civilizações antigas foram visitadas 
              por seres extraterrestres que influenciaram o desenvolvimento humano.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
