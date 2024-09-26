export enum BUTTON_VARIANT {
  PRIMARY = "primary",
  ICON = "icon",
  CTA = "cta",
}

export const BUTTON_VARIANT_CLASSNAME: Record<BUTTON_VARIANT, string> = {
  [BUTTON_VARIANT.PRIMARY]:
    "bg-blue-500 text-white border-none rounded-md py-2 px-4 text-lg cursor-pointer transition-all transform hover:bg-blue-600 active:scale-95",
  [BUTTON_VARIANT.ICON]: "size-10",
  [BUTTON_VARIANT.CTA]:
    "bg-red-500 text-white rounded-full  py-2 px-4 text-lg cursor-pointer transition-all hover:bg-red-700",
};
