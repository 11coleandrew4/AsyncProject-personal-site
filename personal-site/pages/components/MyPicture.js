import Image from 'next/image';

function MyPicture() {
  return (
    <Image
      src="/goood.png"
      alt="me"
      width="590"
      height="308"
      className="picture"
      id="my-picture"
    />
  );
}

export default MyPicture;
