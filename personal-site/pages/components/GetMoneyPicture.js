import Image from 'next/image';

function GetMoneyPicture() {
  return (
    <Image
      src="/Get-money-app.png"
      alt="me"
      width="590"
      height="308"
      className="picture"
      id="my-picture"
    />
  );
}

export default GetMoneyPicture;
