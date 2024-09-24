export enum EBadgeVariant {
  notice = "notice",
  clear = "clear",
}

export const badgeStyles: Record<EBadgeVariant, string> = {
  [EBadgeVariant.notice]:
    "bg-red-500 text-white active:!bg-red700 hover:bg-red800",
  [EBadgeVariant.clear]:
    "border border-neutral-700 text-neutral300 active:bg-neutral700 hover:border-neutral600",
};
