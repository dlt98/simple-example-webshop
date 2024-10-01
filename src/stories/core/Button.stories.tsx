import {
  Button,
  BUTTON_VARIANT,
  BUTTON_VARIANT_CLASSNAME,
} from "@/components/core";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(BUTTON_VARIANT),
    },
    disabled: { control: "boolean" },
    isLoading: { control: "boolean" },
    leftIcon: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: BUTTON_VARIANT.PRIMARY,
  },
};

export const Icon: Story = {
  args: {
    children: "🔍",
    variant: BUTTON_VARIANT.ICON,
  },
};

export const CTA: Story = {
  args: {
    children: "Call to Action",
    variant: BUTTON_VARIANT.CTA,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
    variant: BUTTON_VARIANT.PRIMARY,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    isLoading: true,
    variant: BUTTON_VARIANT.PRIMARY,
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: "Button with Icon",
    leftIcon: <span>🔍</span>,
    variant: BUTTON_VARIANT.PRIMARY,
  },
};

export const CustomClassName: Story = {
  args: {
    children: "Custom Class Button",
    className: "bg-purple-500 text-white px-4 py-2 rounded",
  },
};

// Display all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      {Object.entries(BUTTON_VARIANT).map(([key, value]) => (
        <div key={key} className="flex items-center space-x-2">
          <Button variant={value as BUTTON_VARIANT}>{key}</Button>
          <span className="text-sm text-gray-500">({value})</span>
        </div>
      ))}
    </div>
  ),
};

// Display variant classnames
export const VariantClassnames: Story = {
  render: () => (
    <div className="space-y-4">
      {Object.entries(BUTTON_VARIANT_CLASSNAME).map(([key, value]) => (
        <div key={key} className="rounded border p-4">
          <h3 className="mb-2 font-bold">{key}</h3>
          <pre className="rounded bg-gray-100 p-2 text-sm">{value}</pre>
        </div>
      ))}
    </div>
  ),
};
