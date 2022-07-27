import Image from 'next/image';

function DogAppPicture() {
  return (
    <Image
      src="/Dog-App.png"
      alt="me"
      width="590"
      height="308"
      className="picture"
      id="my-picture"
    />
  );
}

export default DogAppPicture;
