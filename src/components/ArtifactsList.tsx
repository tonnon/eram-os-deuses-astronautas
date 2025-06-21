
import { artifactDescriptions } from "@/data/chapterData";

interface ArtifactsListProps {
  artifacts: string[];
}

export const ArtifactsList = ({ artifacts }: ArtifactsListProps) => {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold text-amber-400 mb-4">Evidências Antigas</h3>
      {artifacts.map((artifact) => (
        <div key={artifact} className="p-4 bg-amber-400/10 rounded-lg border border-amber-400/20">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-amber-400 rounded-full flex-shrink-0"></div>
            <h4 className="text-amber-400 font-medium capitalize">
              {artifact.replace(/_/g, ' ')}
            </h4>
          </div>
          <p className="text-xs text-slate-300 mt-2">
            {artifactDescriptions[artifact] || "Evidência arqueológica misteriosa"}
          </p>
        </div>
      ))}
    </div>
  );
};
