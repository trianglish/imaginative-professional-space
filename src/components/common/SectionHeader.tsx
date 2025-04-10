
interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div className="w-20 h-1 bg-marketing-500 mx-auto mb-6 rounded"></div>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};

export default SectionHeader;
