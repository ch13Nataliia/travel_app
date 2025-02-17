import Image from 'next/image';
import React from 'react';
type Props = {
  image: string;
  title: string;
};
const WhyChooseCard = ({ image, title }: Props) => {
  return (
    <div>
      {/* image */}
      <Image
        src={image}
        width={70}
        height={70}
        alt="image"
        className="mx-auto"
      />
      {/* text content */}
      <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">
        {title}
      </h1>
      <p className="mt-2 text-center text-xs font-medium texr-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        quia?
      </p>
    </div>
  );
};

export default WhyChooseCard;
