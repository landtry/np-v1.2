import Image from "next/image";
import React from "react";

interface Props {
  image: string;
}

const Avatar = ({ image }: Props) => {
  console.log(image);
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

export default Avatar;
