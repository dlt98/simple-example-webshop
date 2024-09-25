interface IProps {
  title: string;
}

export const SidebarCanvasHeader = ({ title }: IProps) => (
  <div className="flex flex-col space-y-2 text-center sm:text-left">
    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
  </div>
);
