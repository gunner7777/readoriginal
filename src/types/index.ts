import { string } from "prop-types";

export interface ISimpleComponent {
  className?: string;
  children?: React.ReactNode;
}

export interface IImage {
  imgUrl: string;
  className: string;
}

export interface ITextInfo {
  imgUrl: string;
  textAuthor: string;
  textTitle: string;
  className: string;
}

export interface IOpenTextInfo {
  textName: string;
}
