
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedArtifactProps {
  type: string;
  delay?: number;
}

const artifactData = {
  pyramid: { emoji: "🔺", name: "The Great Pyramid", description: "Mathematical precision beyond ancient capabilities" },
  megalith: { emoji: "🗿", name: "Megalithic Stones", description: "Massive blocks moved impossible distances" },
  stonehenge: { emoji: "⭕", name: "Stone Circles", description: "Astronomical computers in stone" },
  ufo: { emoji: "🛸", name: "Ancient UFO", description: "Sky vehicles in historical accounts" },
  ancient_text: { emoji: "📜", name: "Sacred Texts", description: "Detailed descriptions of sky gods" },
  vimana: { emoji: "🚁", name: "Vimana Craft", description: "Flying machines with technical specs" },
  helmet: { emoji: "⚱️", name: "Divine Helmet", description: "Advanced breathing apparatus" },
  communication: { emoji: "📡", name: "Communication Device", description: "Ancient radio technology" },
  control_panel: { emoji: "🎛️", name: "Control Interface", description: "Complex technological controls" },
  star_map: { emoji: "🌌", name: "Celestial Maps", description: "Impossible astronomical knowledge" },
  acoustic_chamber: { emoji: "🔊", name: "Sound Chamber", description: "Acoustic engineering perfection" },
  celestial_alignment: { emoji: "⭐", name: "Star Alignment", description: "Precise astronomical positioning" },
  geoglyph: { emoji: "🛣️", name: "Ground Drawings", description: "Massive artwork visible from sky" },
  aerial_view: { emoji: "👁️", name: "Aerial Perspective", description: "Designs for sky observation" },
  geometric_precision: { emoji: "📐", name: "Perfect Geometry", description: "Mathematical accuracy over miles" },
  ezekiel_wheel: { emoji: "☸️", name: "Ezekiel's Wheel", description: "Biblical UFO encounter" },
  pillar_fire: { emoji: "🔥", name: "Pillar of Fire", description: "Guiding technological beacon" },
  heavenly_chariot: { emoji: "🚀", name: "Divine Chariot", description: "Space vehicle descriptions" },
  cuneiform_tablet: { emoji: "📋", name: "Sumerian Tablets", description: "Oldest written records of gods" },
  genetic_engineering: { emoji: "🧬", name: "DNA Manipulation", description: "Ancient genetic knowledge" },
  solar_system: { emoji: "🪐", name: "Planetary Knowledge", description: "Complete solar system awareness" },
  moai_statue: { emoji: "🗿", name: "Easter Island Heads", description: "Mysterious transportation methods" },
  rongorongo_script: { emoji: "📝", name: "Unknown Writing", description: "Undeciphered communication system" },
  acoustic_properties: { emoji: "🎵", name: "Sound Engineering", description: "Advanced acoustic design" },
  antikythera: { emoji: "⚙️", name: "Ancient Computer", description: "2000-year-old calculation device" },
  baghdad_battery: { emoji: "🔋", name: "Electric Device", description: "Ancient electrical technology" },
  precision_cutting: { emoji: "💎", name: "Laser-like Cuts", description: "Impossible precision stonework" },
  modern_ufo: { emoji: "🛸", name: "Modern Sightings", description: "Contemporary visitor evidence" },
  ancient_prophecy: { emoji: "🔮", name: "Return Prophecies", description: "Predictions of divine return" },
  technological_acceleration: { emoji: "🚀", name: "Tech Revolution", description: "Unprecedented advancement speed" },
};

export const AnimatedArtifact = ({ type, delay = 0 }: AnimatedArtifactProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const artifact = artifactData[type as keyof typeof artifactData];

  if (!artifact) return null;

  return (
    <div
      className={cn(
        "bg-gradient-to-br from-amber-400/20 to-yellow-600/20 p-6 rounded-lg border border-amber-400/30 backdrop-blur-sm cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20 animate-fade-in",
        isHovered && "bg-gradient-to-br from-amber-400/30 to-yellow-600/30"
      )}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center">
        <div className={cn(
          "text-4xl mb-3 transition-transform duration-300",
          isHovered && "scale-110 animate-pulse"
        )}>
          {artifact.emoji}
        </div>
        <h4 className="text-amber-400 font-semibold text-sm mb-2">{artifact.name}</h4>
        <p className="text-slate-300 text-xs leading-relaxed">{artifact.description}</p>
      </div>

      {/* Glow effect */}
      <div className={cn(
        "absolute inset-0 rounded-lg bg-gradient-to-br from-amber-400/10 to-yellow-600/10 opacity-0 transition-opacity duration-300",
        isHovered && "opacity-100"
      )} />
    </div>
  );
};
