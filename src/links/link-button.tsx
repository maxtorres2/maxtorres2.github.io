import "./links.css";
import { PropsWithChildren } from "react";

interface LinkButtonProps {
  link: string;
  target?: string;
}

const LinkButton = (props: PropsWithChildren<LinkButtonProps>) => {
  return (
    <a
      className="link-button"
      href={props.link}
      target={props.target}
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};

export default LinkButton;
