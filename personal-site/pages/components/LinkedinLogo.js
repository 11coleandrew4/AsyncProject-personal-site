import Image from 'next/image';
import Link from 'next/link';

function LinkedinLogo() {
  return (
    <Link href="https://www.linkedin.com/in/cole-berman-8a61b01a9/">
      <div id="outer-linkedin-picture-div">
        <div id="linkedin-logo-picture">
          <Image
            src="/linkedin-icon.png"
            alt="me"
            width="40"
            height="40"
            className="picture"
          />
        </div>
      </div>
    </Link>
  );
}

export default LinkedinLogo;
