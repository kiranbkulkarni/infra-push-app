export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Ready" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "In Progress" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Just starteds" }
];

export function getGenres() {
  return genres.filter(g => g);
}
