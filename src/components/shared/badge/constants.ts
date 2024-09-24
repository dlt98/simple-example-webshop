export enum EBadgeVariant {
  red = "red",
  clear = "clear",
}

export const badgeStyles: Record<EBadgeVariant, string> = {
  [EBadgeVariant.red]:
    "bg-red-500 text-white active:!bg-red700 hover:bg-red-800",
  [EBadgeVariant.clear]:
    "border-1.5 border-neutral-700 text-neutral300 active:bg-neutral700 hover:border-neutral600",
};
