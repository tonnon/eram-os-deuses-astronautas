
import { chapterData } from "@/data/chapterData";
import { ChapterHeader } from "./ChapterHeader";
import { ChapterIllustration } from "./ChapterIllustration";
import { ChapterText } from "./ChapterText";
import { ArtifactsList } from "./ArtifactsList";

interface Chapter {
  title: string;
  id: string;
}

interface ChapterContentProps {
  chapter: Chapter;
  chapterIndex: number;
}

export const ChapterContent = ({ chapter, chapterIndex }: ChapterContentProps) => {
  const data = chapterData[chapter.id as keyof typeof chapterData];
  const Icon = data.icon;

  return (
    <div className="relative min-h-screen p-8 lg:p-12">
      {/* Chapter Header */}
      <ChapterHeader chapter={chapter} chapterIndex={chapterIndex} Icon={Icon} />
      
      {/* Chapter Illustration */}
      <div className="max-w-4xl mx-auto">
        <ChapterIllustration image={data.image} title={chapter.title} />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-12">
        {/* Text Content */}
        <ChapterText content={data.content} />

        {/* Animated Artifacts */}
        <ArtifactsList artifacts={data.artifacts} />
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 right-8 text-6xl text-amber-400/10 font-bold transform rotate-12 pointer-events-none">
        𓀀
      </div>
      <div className="absolute bottom-1/4 left-8 text-4xl text-amber-400/10 font-bold transform -rotate-12 pointer-events-none">
        𓊪
      </div>
    </div>
  );
};
