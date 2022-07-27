import Image from 'next/image';

function GottaGoPicture() {
  return (
    <Image
      src="/GottaGo.png"
      alt="me"
      width="590"
      height="308"
      className="picture"
      id="my-picture"
    />
  );
}

export default GottaGoPicture;
