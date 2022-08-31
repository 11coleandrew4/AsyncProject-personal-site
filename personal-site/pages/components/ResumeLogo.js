import Image from 'next/image';
import Link from 'next/link';

function ResumeLogo() {
  return (
    <Link href="https://github.com/11coleandrew4">
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
