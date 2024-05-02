import { Skeleton } from '@/components/ui/skeleton';

const LoadingBlogList = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className="mt-5 grid  grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {arr.map((item: any, idx: number) => (
        <div className="flex flex-col md:w-full" key={idx}>
          <Skeleton className="h-[300px] w-full rounded-lg md:w-full" />
          <div className="mt-5">
            <Skeleton className="h-10 w-full md:w-full" />
            <Skeleton className="mt-5 h-10 w-full md:w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingBlogList;
