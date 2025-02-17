import Image from 'next/image';
import React from 'react';

type Props = {
  news: {
    id: number;
    image: string;
    title: string;
    date: string;

  };
};
const NewsCard = ({ news }: Props) => {
  return (
    <div>
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        {/* image */}
        <Image
          src={news.image}
          alt={news.title}
          width={500}
          height={500}
          className="overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110"
        />
      </div>
      {/* text content */}
      <div className="">
        <h1 className="mt-4 text-lg font-semibold text-green-700 hover:text-black cursor-pointer transition-all duration-200">
          {news.title}
        </h1>
        <p className="text-sm text-gray-600 mt-3 font-medium mb-6">
          {news.date}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
