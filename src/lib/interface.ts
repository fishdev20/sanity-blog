export interface IBlogCard {
  title: string;
  slug: string;
  date: string;
  author: {
    name: string;
  };
  categories: string;
  smallDesc: string;
  mainImage: any;
}

export interface IBlogArticle {
  title: string;
  slug: string;
  date: string;
  author: {
    name: string;
  };
  categories: string;
  smallDesc: string;
  mainImage: any;
  body: any;
  headings: string[];
}
