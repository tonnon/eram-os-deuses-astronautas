
interface Chapter {
  title: string;
  id: string;
}

interface ChapterHeaderProps {
  chapter: Chapter;
  chapterIndex: number;
  Icon: any;
}

export const ChapterHeader = ({ chapter, chapterIndex, Icon }: ChapterHeaderProps) => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-amber-400/20 rounded-full mr-4">
          <Icon className="h-8 w-8 text-amber-400" />
        </div>
        <div>
          <p className="text-amber-400 text-sm font-medium">Capítulo {chapterIndex + 1}</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-white">{chapter.title}</h1>
        </div>
      </div>
      
      <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-yellow-500 mb-8"></div>
    </div>
  );
};
