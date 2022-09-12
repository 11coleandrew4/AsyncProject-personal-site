import Image from 'next/image';
import Link from 'next/link';

function ResumeLogo() {
  return (
    <Link href="https://docs.google.com/document/d/e/2PACX-1vSfpjgcFDZtApaP_tzfmT3_mnK9giVF9WTHli5MyWCZLYiNwN-7De3LODXbergzJTq-MQZc6dlTvKC-/pub">
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
