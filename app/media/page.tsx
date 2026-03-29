import MediaCard from "@/components/ui/media-card";

export default function MediaPage() {
  const mediaItems = [
    { id: "1", title: "Test", thumbnail: "/album-covers/sex-pistols.jpeg" },
    { id: "2", title: "Test", thumbnail: "/album-covers/album2.jpg" },
    { id: "3", title: "Test", thumbnail: "/album-covers/album3.jpg" },
    { id: "4", title: "Test", thumbnail: "/album-covers/album4.jpg" },
  ];

  return (
    <div className="bg-gray-200">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Media</h1>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-8">
          {mediaItems.map((mediaItem) => (
            <MediaCard
              title={mediaItem.title}
              thumbnail={mediaItem.thumbnail}
              key={mediaItem.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
