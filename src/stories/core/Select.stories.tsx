import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ISingleSelectItem, Select } from "@/components/core";

// Mock data for options
const mockOptions: ISingleSelectItem[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const meta: Meta<typeof Select> = {
  title: "Components/Core/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    selectedItem: { control: "object" },
    options: { control: "object" },
    onChange: { action: "onChange" },
    isLoading: { control: "boolean" },
    isClearable: { control: "boolean" },
    placeholder: { control: "text" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    id: "default-select",
    selectedItem: null,
    options: mockOptions,
    onChange: () => {},
    placeholder: "Select an option...",
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: "Choose an option",
  },
};

export const WithSelectedItem: Story = {
  args: {
    ...Default.args,
    selectedItem: mockOptions[1],
  },
};

export const Clearable: Story = {
  args: {
    ...Default.args,
    isClearable: true,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const InteractiveExample: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedItem, setSelectedItem] = useState<ISingleSelectItem | null>(
      null,
    );

    return (
      <Select
        {...args}
        selectedItem={selectedItem}
        onChange={(newValue) => {
          setSelectedItem(newValue);
          args.onChange(newValue);
        }}
      />
    );
  },
  args: {
    ...Default.args,
    isClearable: true,
    label: "Interactive Select",
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <Select
        id="default"
        options={mockOptions}
        selectedItem={null}
        onChange={() => {}}
        placeholder="Default Select"
      />
      <Select
        id="with-label"
        options={mockOptions}
        selectedItem={null}
        onChange={() => {}}
        placeholder="With Label"
        label="Select with Label"
      />
      <Select
        id="selected"
        options={mockOptions}
        selectedItem={mockOptions[0]}
        onChange={() => {}}
        placeholder="With Selected Item"
      />
      <Select
        id="clearable"
        options={mockOptions}
        selectedItem={mockOptions[1]}
        onChange={() => {}}
        placeholder="Clearable Select"
        isClearable
      />
      <Select
        id="loading"
        options={mockOptions}
        selectedItem={null}
        onChange={() => {}}
        placeholder="Loading State"
        isLoading
      />
    </div>
  ),
};
