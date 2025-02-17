import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import NewsCard from './NewsCard';
import { newsData } from '@/data/data';
const News = () => {
  return (
    <div className="pt-16 pb-16">
      {/* section heading */}
      <SectionHeading heading="Exiting Travel News For You" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
      {newsData.map((data) => {
          return (
            <div key={data.id}>
              <NewsCard news={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
