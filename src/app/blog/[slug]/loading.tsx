import styles from './style.module.css';

const LoadingBlog = () => {
  return (
    <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-5">
      <div className={styles.cube}>
        <div className="border-2 border-primary bg-slate-300 bg-opacity-25 dark:bg-slate-200 dark:bg-opacity-20"></div>
        <div className="border-2 border-primary bg-slate-300 bg-opacity-25 dark:bg-slate-200 dark:bg-opacity-20"></div>
        <div className="border-2 border-primary bg-slate-300 bg-opacity-25 dark:bg-slate-200 dark:bg-opacity-20"></div>
        <div className="border-2 border-primary bg-slate-300 bg-opacity-25 dark:bg-slate-200 dark:bg-opacity-20"></div>
        <div className="border-2 border-primary bg-slate-300 bg-opacity-25 dark:bg-slate-200 dark:bg-opacity-20"></div>
        <div className="border-2 border-primary bg-slate-300 bg-opacity-25 dark:bg-slate-200 dark:bg-opacity-20"></div>
      </div>
      <h4 className="mt-6">Loading Article...</h4>
    </div>
  );
};

export default LoadingBlog;
