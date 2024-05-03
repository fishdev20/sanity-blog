import CopyButton from '@/app/components/CopyButton';
import TableOfContent from '@/app/components/TableOfContent';
import Transition from '@/app/components/Transition';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { IBlogArticle } from '@/lib/interface';
import { formatDate, slugify } from '@/lib/utils';
import Image from 'next/image';
import { MdOutlineFormatListBulleted } from 'react-icons/md';
import PortableText from 'react-portable-text';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dataset, projectId } from '../../../../sanity/env';
import { client } from '../../../../sanity/lib/client';
import { urlForImage } from '../../../../sanity/lib/image';

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == "post" && slug.current == '${slug}'] {
      "slug": slug.current,
      "date": _createdAt,
      author->{
        name,
      },
      categories[]->{
        title,
      },
      body,
      "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
      mainImage,
      title
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

const BlogArticle = async ({ params }: { params: any }) => {
  const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
  await delay(1500);
  const data: IBlogArticle = await getData(params.slug);
  return (
    <Transition>
      <div className="grid grid-cols-12">
        <div className="col-span-12 mt-8 md:col-span-8">
          <h1>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight sm:text-4xl">
              {data.title}
            </span>
          </h1>

          <Image
            src={urlForImage(data.mainImage)}
            width={700}
            height={700}
            alt="Title Image"
            priority
            className="mt-8 w-full self-center rounded-lg border"
          />

          <div className="mt-3 flex items-center gap-3 md:hidden">
            <Avatar className="border-2 border-gray-500">
              <AvatarImage src="https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-md line-clamp-3 font-bold text-gray-600 dark:text-gray-300">
                {data.author.name}
              </p>
              <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                Software Engineer
              </p>
            </div>
          </div>

          <div className="text-md mt-3 line-clamp-3 flex items-center gap-2 text-blue-600 dark:text-blue-300">
            <time dateTime={formatDate(data.date)} itemProp="datePublished">
              {formatDate(data.date)}
            </time>
          </div>

          <div className="prose-md prose prose-blue mt-16 max-w-full dark:prose-invert prose-a:text-primary prose-li:marker:text-primary">
            <PortableText
              projectId={projectId}
              dataset={dataset}
              content={data.body}
              serializers={{
                unknownType: ({ node }: { node: any }) => {
                  if (!node || !node.code) {
                    return null;
                  }
                  return (
                    <div className="relative rounded-[0.375rem] dark:bg-gray-700">
                      <SyntaxHighlighter
                        useInlineStyles={true}
                        language={node.language}
                        style={railscasts}
                        customStyle={{
                          minHeight: 60,
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%',
                          overflow: 'auto',
                        }}
                      >
                        {node.code}
                      </SyntaxHighlighter>
                      <CopyButton code={node.code} />
                    </div>
                  );
                },
                code: ({ children }: any) => {
                  return (
                    <span className="rounded-sm bg-gray-500 p-1 font-mono text-white dark:bg-gray-800">
                      {children[0]}
                    </span>
                  );
                },
                h2: ({ children }: any) => (
                  <h2
                    id={slugify(children[0])}
                    className="mb-3 scroll-mt-[100px] text-3xl font-bold"
                  >
                    {children[0]}
                  </h2>
                ),
                h3: ({ children }: any) => (
                  <h3
                    id={slugify(children[0])}
                    className="mb-3 scroll-mt-[100px] text-2xl font-bold"
                  >
                    {children[0]}
                  </h3>
                ),
                h4: ({ children }: any) => {
                  return (
                    <h4
                      id={slugify(children[0])}
                      className="mb-3 scroll-mt-[100px] text-2xl font-bold"
                    >
                      {children[0]}
                    </h4>
                  );
                },
                h5: ({ children }: any) => (
                  <h5
                    id={slugify(children[0])}
                    className="mb-3 scroll-mt-[100px] text-2xl font-bold"
                  >
                    {children[0]}
                  </h5>
                ),
                h6: ({ value }: any) => (
                  <h6
                    id={slugify(value.children[0].text)}
                    className="mb-3 scroll-mt-[100px] text-xl font-bold"
                  >
                    {value.children[0].text}
                  </h6>
                ),
              }}
              className="w-full"
            />
          </div>
        </div>
        <div className="col-span-1 mt-8 hidden items-center justify-center md:flex ">
          <Separator orientation="vertical" className="my-4" />
        </div>

        <div className="col-span-3 mt-8 hidden md:block">
          <div className="mb-8 mt-2 flex items-center gap-3">
            <Avatar className="border-2 border-gray-500">
              <AvatarImage src="https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-md line-clamp-3 font-bold text-gray-600 dark:text-gray-300">
                {data.author.name}
              </p>
              <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                Software Engineer
              </p>
            </div>
          </div>
          <TableOfContent headings={data.headings} />
        </div>

        <Popover>
          <PopoverTrigger className="fixed bottom-6 right-6 z-50 block md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="bg-white/30 backdrop-blur-[10px] backdrop-filter"
            >
              <MdOutlineFormatListBulleted height={'20px'} width={'20px'} />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            side="top"
            align="end"
            sideOffset={4}
            alignOffset={50}
            className="ml-10 w-full bg-white/30 p-0 backdrop-blur-[10px] backdrop-filter dark:bg-gray-800/30"
          >
            <TableOfContent headings={data.headings} />
          </PopoverContent>
        </Popover>
      </div>
    </Transition>
  );
};

export default BlogArticle;
