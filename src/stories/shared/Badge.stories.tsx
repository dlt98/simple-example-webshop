import { Badge, EBadgeVariant } from "@/components/shared";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  title: "Components/Shared/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    variant: {
      control: "select",
      options: Object.values(EBadgeVariant),
    },
    className: { control: "text" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: "Default Badge",
  },
};

export const RedVariant: Story = {
  args: {
    text: "Red Badge",
    variant: EBadgeVariant.red,
  },
};

export const ClearVariant: Story = {
  args: {
    text: "Clear Badge",
    variant: EBadgeVariant.clear,
  },
};

export const WithChildren: Story = {
  args: {
    children: (
      <>
        <span role="img" aria-label="star">
          ⭐
        </span>
        Custom Content
      </>
    ),
  },
};

export const WithCustomClass: Story = {
  args: {
    text: "Custom Class",
    className: "bg-purple-500 text-white",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-2">
      {Object.values(EBadgeVariant).map((variant) => (
        <Badge key={variant} variant={variant} text={`${variant} Badge`} />
      ))}
    </div>
  ),
};

export const WithLongText: Story = {
  args: {
    text: "This is a very long text to demonstrate how the badge handles overflow",
    variant: EBadgeVariant.red,
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2">
      <Badge
        text="Disabled Red Badge"
        variant={EBadgeVariant.red}
        className="disabled"
      />
      <Badge
        text="Disabled Clear Badge"
        variant={EBadgeVariant.clear}
        className="disabled"
      />
    </div>
  ),
};
