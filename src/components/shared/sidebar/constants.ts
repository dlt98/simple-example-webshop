export enum ESidebarPosition {
  RIGHT = "right",
  LEFT = "left",
}

export const SIDEBAR_POSITIONING_CLASS: Record<
  ESidebarPosition,
  {
    isOpen: string;
    isClosed: string;
  }
> = {
  [ESidebarPosition.RIGHT]: {
    isOpen: "right-0",
    isClosed: "-right-full",
  },
  [ESidebarPosition.LEFT]: {
    isOpen: "left-0",
    isClosed: "-left-full",
  },
};
