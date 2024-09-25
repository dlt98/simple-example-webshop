import { Tooltip } from "react-tooltip";

interface IProps {
  id: string;
  title: string;
  fullWidth?: boolean;
}

const CustomTooltip = ({ id, title, fullWidth }: IProps) => {
  return (
    <Tooltip
      id={id}
      style={{
        backgroundColor: "#33FF85",
        color: "#000",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: 500,
        whiteSpace: "wrap",
        wordBreak: "break-word",
        width: fullWidth ? "100%" : "auto",
        zIndex: 100,
      }}
    >
      {title}
    </Tooltip>
  );
};

export default CustomTooltip;
