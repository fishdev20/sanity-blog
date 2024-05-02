import { IBlogCard } from '@/lib/interface';
import BlogCard from './BlogCard';
import Transition from './Transition';

const Blogs = ({ data }: { data: IBlogCard[] }) => {
  return (
    <Transition>
      <div className="mt-5 grid  grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item: IBlogCard, idx: number) => (
          <BlogCard data={item} key={idx} />
        ))}
      </div>
    </Transition>
  );
};

export default Blogs;
