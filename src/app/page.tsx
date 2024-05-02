import { IBlogCard } from '@/lib/interface';
import { client } from '../../sanity/lib/client';
import Blogs from './components/Blogs';

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'post'] | order(_createdAt desc){
    "slug": slug.current,
    "date": _createdAt,
    author->{
      name,
    },
    categories[]->{
      title,
    },
    mainImage,
    title,
    smallDesc
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
  await delay(1000);
  const data: IBlogCard[] = await getData();
  return <Blogs data={data} />;
}
