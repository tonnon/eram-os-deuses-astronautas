
interface ChapterTextProps {
  content: string;
}

export const ChapterText = ({ content }: ChapterTextProps) => {
  return (
    <div className="lg:col-span-2">
      <div className="prose prose-invert prose-amber max-w-none">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-slate-200 leading-relaxed mb-6 text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
