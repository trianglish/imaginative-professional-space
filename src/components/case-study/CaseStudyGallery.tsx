
interface GalleryItem {
  image: string;
  caption: string;
}

interface CaseStudyGalleryProps {
  gallery?: GalleryItem[];
}

const CaseStudyGallery = ({ gallery }: CaseStudyGalleryProps) => {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-600">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGallery;
