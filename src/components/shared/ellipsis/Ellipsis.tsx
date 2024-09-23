import { useRef } from "react";

import { twMerge } from "tailwind-merge";

import InfoIcon from "../../../assets/icons/InfoIcon.svg";

import { generateRandomKey, truncateString } from "../../../utils";
import { CustomTooltip } from "../tooltip";
import { useOverflowCheck } from "../../../hooks";

interface IProps {
  title: string;
  className?: string;
  maxCharacters?: number;
  contentClassName?: string;
}

const Ellipsis = ({
  title,
  className,
  maxCharacters,
  contentClassName,
}: IProps) => {
  const { textRef, isOverflown } = useOverflowCheck();

  const { current: tooltipId } = useRef(generateRandomKey());

  const generateContent = () => {
    return maxCharacters ? truncateString(title, maxCharacters) : title;
  };

  const isLongText = maxCharacters ? title.length > maxCharacters : false;
  const shouldHaveEllipsis = isOverflown || isLongText;

  return (
    <div
      data-tooltip-id={tooltipId}
      className={twMerge(
        "flex min-w-0 flex-grow items-center gap-1",
        shouldHaveEllipsis && "cursor-pointer",
        className
      )}
    >
      <div
        ref={textRef}
        className={twMerge(
          "max-w-full overflow-hidden text-ellipsis whitespace-nowrap",
          contentClassName
        )}
      >
        {generateContent()}
      </div>
      {shouldHaveEllipsis && (
        <div tabIndex={0} role="button" onClick={(e) => e.stopPropagation()}>
          <img src={InfoIcon} alt="information icon" className="size-3.5" />
        </div>
      )}
      {shouldHaveEllipsis && <CustomTooltip id={tooltipId} title={title} />}
    </div>
  );
};

export default Ellipsis;
