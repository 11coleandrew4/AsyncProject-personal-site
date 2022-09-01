import Image from 'next/image';
import Link from 'next/link';

function ResumeLogo() {
  return (
    <Link href="https://docs.google.com/document/d/e/2PACX-1vTCFs7YcMeUBkdJKjpswNvea6Vgys2qm0dp-hJUHuYcPiTNuxXgMtRtxyDplQwuagOGwKqzG0IMMV9U/pub">
      <div id="outer-resume-picture-div">
        <div id="resume-logo-picture">
          <Image
            src="/resume-logo.png"
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

export default ResumeLogo;
