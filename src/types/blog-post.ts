export type BlogPost = {
  title: string;
  description: string;
  thumbnail: string;
  coverImage?: string;
  date: string;
  slug: string;
  readingTime: string;
  tags: [string];
  publisher: string;
  publisherImage?: string;
  publisherLink?: string;
};
