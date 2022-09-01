import Image from 'next/image';
import Link from 'next/link';

function LinkedinLogo() {
  return (
    <Link href="https://www.linkedin.com/in/cole-berman/">
      <div id="outer-linkedin-picture-div">
        <div id="linkedin-logo-picture">
          <Image
            src="/linkedin-icon.png"
            alt="me"
            width="130"
            height="130"
            className="picture"
          />
        </div>
      </div>
    </Link>
  );
}

export default LinkedinLogo;
