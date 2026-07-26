export type ArtPiece = {
  id: string;
  src: string;
  alt: string;
  nsfw: boolean;
  // optional metadata for the lightbox later
  title?: string;
  year?: number;
};

export const artworks: ArtPiece[] = [
  { id: "1", src: "/gallery/Valentines.png", alt: "Valentine YCH render", nsfw: false, title: "Valentine render" },
  { id: "2", src: "/gallery/Mox.png", alt: "2 character render, size difference, wholesome", nsfw: false, title: "Snuggles ( size Diff )" },
  { id: "3", src: "/gallery/Gbday.png", alt: "Character render", nsfw: false, title: "Multicharacter scene" },
  { id: "4", src: "/gallery/GanV.png", alt: "Character render", nsfw: true, title: "Nsfw Cuddles" },
  { id: "5", src: "/gallery/GIGI2.png", alt: "Character render", nsfw: false, title: "Party isn't over" },
  { id: "6", src: "/gallery/CS2.png", alt: "Character render", nsfw: true, title: "Cock Sandwitch" },
  { id: "7", src: "/gallery/Seat.png", alt: "Character render", nsfw: true, title: "Facesitting" },
  { id: "8", src: "/gallery/popito.png", alt: "Character render", nsfw: false, title: "Full Scene Comission" },
  { id: "9", src: "/gallery/River.png", alt: "Character render", nsfw: false, title: "Friendship" },
  { id: "10", src: "/gallery/river2.png", alt: "Character render", nsfw: false, title: "Friendship ( alt. angle )" },
  { id: "11", src: "/gallery/Coffegb.png", alt: "Character render", nsfw: false, title: "Paw Domination" },
  { id: "12", src: "/gallery/Vored4.png", alt: "Character render", nsfw: false, title: "Vore" },
  { id: "13", src: "/gallery/yes.png", alt: "Character render", nsfw: false, title: "B-day Gift to a friend" }, 
];