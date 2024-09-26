export const disableScrollOnBody = (stopScrolling: boolean) => {
  // Check if document is defined, this is to avoid SSR errors
  if (typeof document === "undefined") return;

  const classList = ["noScroll"];

  if (stopScrolling) {
    document.body.classList.add(...classList);
  } else {
    document.body.classList.remove(...classList);
  }
};
