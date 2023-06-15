import LinkButton from "./link-button";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

const Links = () => {
  return (
    <div className="links">
      <LinkButton link="https://github.com/maxtorres2" target="_blank">
        <IoLogoGithub />
      </LinkButton>
      <LinkButton link="https://www.linkedin.com/in/maxtorres2" target="_blank">
        <IoLogoLinkedin />
      </LinkButton>
      <LinkButton link="mailto:maxtorres487@gmail.com">
        <IoMail />
      </LinkButton>
    </div>
  );
};

export default Links;
