import { MediaItem } from "./types/media-item";

export function getLocalMedia(): MediaItem[] {
  return [
    {
      id: "1",
      title: "Test",
      type: "local",
      src: "/media/sample.mp4",
      thumbnail: "/album-covers/sex-pistols.jpeg",
    },
    {
      id: "2",
      title: "Test",
      type: "local",
      src: "/media/sample.mp4",
      thumbnail: "/album-covers/album2.jpg",
    },
    {
      id: "3",
      title: "Test",
      type: "local",
      src: "/media/sample.mp4",
      thumbnail: "/album-covers/album3.jpg",
    },
    {
      id: "4",
      title: "Boston",
      type: "local",
      src: "/media/sample.mp4",
      thumbnail: "/album-covers/album4.jpg",
    },
  ];
}
