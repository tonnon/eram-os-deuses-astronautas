
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Pyramid, Telescope } from "lucide-react";
import { BookInterface } from "@/components/BookInterface";
import { ParallaxStars } from "@/components/ParallaxStars";
import { AncientSymbols } from "@/components/AncientSymbols";

const Index = () => {
  const [showBook, setShowBook] = useState(false);

  if (showBook) {
    return <BookInterface onClose={() => setShowBook(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white overflow-hidden relative">
      <ParallaxStars />
      <AncientSymbols />      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 -mt-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Animated Title */}
          <div className="mb-8 relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-4 animate-pulse">
              ERAM OS DEUSES
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-6">
              ASTRONAUTAS?
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-6 animate-pulse"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-amber-200 mb-4 font-light">
            Uma Investigação Sobre as Origens da Humanidade
          </p>
          <p className="text-lg text-slate-300 mb-8 italic">
            por Erich von Däniken
          </p>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-12 text-slate-200 space-y-4">
            <p className="text-lg leading-relaxed">
              Embarque numa jornada através dos mistérios antigos e explore a possibilidade de que 
              visitantes extraterrestres moldaram a civilização humana há milhares de anos.
            </p>
            <p className="text-base leading-relaxed text-slate-300">
              Descubra as evidências escondidas à vista de todos: monumentos impossíveis, conhecimento 
              astronômico avançado e textos antigos que descrevem seres vindos das estrelas.
            </p>
          </div>

          {/* Call to Action */}
          <Button 
            onClick={() => setShowBook(true)}
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold px-8 py-4 rounded-lg text-lg shadow-2xl border border-amber-400 transform hover:scale-105 transition-all duration-300 group"
          >
            Começar a Leitura
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Feature Icons */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-8 text-amber-400">
          <div className="text-center animate-bounce" style={{ animationDelay: '0s' }}>
            <Pyramid className="h-8 w-8 mx-auto mb-2" />
            <p className="text-xs">Pirâmides</p>
          </div>
          <div className="text-center animate-bounce" style={{ animationDelay: '0.5s' }}>
            <Star className="h-8 w-8 mx-auto mb-2" />
            <p className="text-xs">Mapas Estelares</p>
          </div>
          <div className="text-center animate-bounce" style={{ animationDelay: '1s' }}>
            <Telescope className="h-8 w-8 mx-auto mb-2" />
            <p className="text-xs">Tecnologia Antiga</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
