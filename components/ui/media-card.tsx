import Image from "next/image";

type MediaCardProps = {
  title: string;
  thumbnail: string;
};

export default function MediaCard({ title, thumbnail }: MediaCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow relative">
      <div className="relative w-full h-[300px]">
        <Image
          src={thumbnail}
          alt={title}
          className="w-full h-auto"
          fill
          style={{ objectFit: "cover" }}
          // objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-2 flex justify-center items-center font-bold">
        {title}
      </div>
    </div>
  );
}
