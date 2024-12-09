type Book = {
  id: number;
  title: string;
  author: string;
  publishedAt: Date;
  genre?: string | null;
  createdAt: Date;
  updatedAt: Date;
}