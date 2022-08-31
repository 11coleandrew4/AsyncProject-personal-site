import Image from 'next/image';
import Link from 'next/link';

function GithubLogo() {
  return (
    <Link href="https://github.com/11coleandrew4">
      <div id="outer-github-picture-div">
        <div id="github-logo-picture">
          <Image
            src="/github-logo.png"
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

export default GithubLogo;
