
interface ChapterIllustrationProps {
  image: string;
  title: string;
}

export const ChapterIllustration = ({ image, title }: ChapterIllustrationProps) => {
  return (
    <div className="mb-8 rounded-lg overflow-hidden border border-amber-400/20 shadow-2xl">
      <img 
        src={image} 
        alt={`Ilustração do capítulo: ${title}`}
        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    </div>
  );
};
