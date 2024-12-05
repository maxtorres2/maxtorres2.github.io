import LinkButton from "../link-button";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import "./link-button-row.css";

export function LinkButtonRow() {
  return (
    <div className="link-button-row">
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
}
