/* export interface ISimpleComponent {
  className?: string;
  children?: React.ReactNode;
} */

/* export interface IImage {
  imgUrl: string;
  className: string;
} */

/* export interface ITextInfo {
  imgUrl: string;
  textAuthor: string;
  textTitle: string;
  className: string;
} */

export interface IOpenTextInfo extends IInlineProps {
  textName: string;
}

/* export interface ITextPart {
  imgUrl: string;
  textPart: string;
} */

export interface IInlineProps {
  className?: string;
}

export interface IParentComponent extends IInlineProps {
  children?: React.ReactNode;
}

export interface IImage extends IInlineProps {
  imgUrl: string;
}

export interface ITextInfo extends IImage, IInlineProps {
  textAuthor: string;
  textTitle: string;
}

export interface ITextPart extends IInlineProps {
  textPart: string;
}
