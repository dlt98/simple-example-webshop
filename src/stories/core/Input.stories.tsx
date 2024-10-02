import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/core";

const meta: Meta<typeof Input> = {
  title: "Components/Core/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    setValue: { action: "setValue" },
    onClear: { action: "onClear" },
    onChange: { action: "onChange" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: "",
    setValue: () => {},
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: "Username",
  },
};

export const WithValue: Story = {
  args: {
    ...Default.args,
    value: "John Doe",
  },
};

export const Disabled: Story = {
  args: {
    ...WithValue.args,
    disabled: true,
  },
};

export const WithCustomClassName: Story = {
  args: {
    ...Default.args,
    className: "bg-gray-100 border-2 border-blue-500",
  },
};

export const InteractiveExample: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("");

    console.log("value", value);

    return (
      <Input
        label="Interactive Input"
        value={value}
        setValue={setValue}
        placeholder="Type to see clear button..."
        onClear={() => console.log("Input cleared")}
      />
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <Input
        label="Empty"
        value=""
        setValue={() => {}}
        placeholder="Empty input"
      />
      <Input label="With Value" value="Hello, World!" setValue={() => {}} />
      <Input
        label="Disabled"
        value="Disabled input"
        setValue={() => {}}
        disabled
      />
      <Input
        label="Custom Class"
        value="Custom styled input"
        setValue={() => {}}
        className="border-2 border-yellow-500 bg-yellow-100"
      />
    </div>
  ),
};
