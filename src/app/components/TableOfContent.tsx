'use client';
import { slugify } from '@/lib/utils';

const TableOfContent = ({ headings }: { headings: any }) => {
  const handleClick = (e: any) => {
    e.preventDefault(); // Prevent default anchor tag behavior
    const targetId = e.target.getAttribute('href').substring(1); // Get the target ID from the href attribute
    const targetElement = document.getElementById(targetId); // Get the target element by ID
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Scroll to the top of the target element
        behavior: 'smooth', // Use smooth scrolling behavior
      });
    }
  };

  return (
    <div className="sticky top-32 mx-auto mt-8 w-full rounded-md border-2 shadow-md dark:bg-gray-700">
      <h2 className="bg:amber-50 mb-5 border-b p-2 text-center text-xl font-bold dark:bg-gray-800">
        Table of Contents
      </h2>
      <div className="p-4">
        <ul>
          {headings?.map((heading: any) => (
            <li key={heading?._key} className="mb-2">
              <a
                className="hover:underline"
                href={`#${slugify(heading.children[0].text)}`}
                onClick={handleClick}
              >
                {heading.children[0].text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContent;
