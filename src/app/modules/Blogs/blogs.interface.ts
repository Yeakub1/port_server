export type TBlog = {
  title: string;
  category: string;
  coverPhoto: string;
  content: string;
};

export type TUpdateBlog = {
  title?: string;
  category?: string;
  coverPhoto?: string;
  content?: string;
};
