import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { IBlogCard } from '@/lib/interface';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '../../../sanity/lib/image';

const BlogCard = ({ data }: { data: IBlogCard }) => {
  return (
    <Card className="border-none shadow-none">
      <Link href={`/blog/${data.slug}`}>
        <div className="relative mx-auto h-auto w-full overflow-hidden rounded-lg ">
          <Image
            src={urlForImage(data.mainImage)}
            alt={data.mainImage.alt}
            width={500}
            height={500}
            className="relative z-0 h-[300px] w-full rounded-lg rounded-t-lg object-cover transition-all duration-300 hover:scale-110"
          />
        </div>
      </Link>

      <CardContent className="mt-5 pl-0">
        <Link href={`/blog/${data.slug}`}>
          <h3 className="line-clamp-2 text-2xl font-bold">{data.title}</h3>
        </Link>
        <p className="mt-2 line-clamp-3 border-l-2 border-l-primary pl-4 text-sm text-gray-600 dark:text-gray-300">
          {data.smallDesc}
        </p>
        <div className="mt-3 flex items-center gap-3">
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
        <p className="mt-3 line-clamp-3 text-sm text-blue-600 dark:text-blue-300">
          {formatDate(data.date)}
        </p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
