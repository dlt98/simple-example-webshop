export enum BUTTON_VARIANT {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  LINK = "link",
}

export const BUTTON_VARIANT_CLASSNAME = {
  [BUTTON_VARIANT.PRIMARY]:
    "bg-green500 label-small text-neutral900 hover:bg-green600 active:bg-green700 disabled:bg-neutral700 disabled:text-neutral800 uppercase",
  [BUTTON_VARIANT.SECONDARY]:
    "bg-transparent border text-white border-solid border-neutral600 hover:border-neutral400 active:border-neutral100 disabled:bg-neutral700 disabled:text-neutral800 uppercase",
  [BUTTON_VARIANT.LINK]:
    "bg-transparent uppercase text-yellow500 active:text-yellow600 disabled:text-neutral700",
};
