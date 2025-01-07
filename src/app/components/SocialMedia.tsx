import {
  Facebook,
  Github,
  Linkedin,
 
  Youtube,
} from "@/app/components/icons";
import Link from "next/link";

export default function SocialMedia() {
  return (

    // TODO: If you activate 3 or more social icons, make sure to update the Navbar styling accordingly.

    // Social Icons
    <nav className="flex gap-6 items-center">
      <Link href={"https://www.youtube.com/@MudasserHaryani"} target="_blank">
        <Youtube className={`w-6 h-6`} />
      </Link>
      <Link href={"https://www.linkedin.com/in/mudasser-haryani-8907b22b4/"} target="_blank">
        <Linkedin className={`w-6 h-6`} />
      </Link>
      
      <Link href={"https://www.facebook.com/mudasser.haryani"} target="_blank">
        <Facebook className={`w-6 h-6`} />
      </Link>
      <Link href={"https://github.com/MudasserHaryani"} target="_blank">
        <Github className={`w-6 h-6 fill-dark dark:fill-light`} />
      </Link>
    </nav>
  );
}
