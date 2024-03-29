export type Blog = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    name: string;
    body: string;
    thumbnail: {
      url: string;
      height: number;
      width: number;
    }
    tag: string;
    toc_visible: string;
    category: string;
  }