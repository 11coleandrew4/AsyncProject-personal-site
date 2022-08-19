import Image from 'next/image';

function MyPicture() {
  return (
    <Image
      src="/my-picture-1.jpg"
      alt="me"
      width="312"
      height="468"
      className="my-picture"
    />
  );
}

export default MyPicture;
