import Image from "next/image";
import React from "react";

interface Props {
  image: string;
}

const AvatarIcon = ({ image }: Props) => {
  if (!image) {
    return (
      <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
        <svg
          className="h-full w-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
    );
  }

  return (
    <Image
      className="inline-block h-12 w-12 rounded-full"
      src={image}
      alt="Avatar"
      width={40}
      height={40}
    />
  );
};

export default AvatarIcon;
