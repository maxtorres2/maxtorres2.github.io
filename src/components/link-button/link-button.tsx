import "./link-button.css";
import { PropsWithChildren } from "react";

export interface LinkButtonProps {
  link: string;
  target?: string;
}

export function LinkButton(props: PropsWithChildren<LinkButtonProps>) {
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
}
