import { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "@/components/productCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    price: { control: "number" },
    image: { control: "text" },
    onClick: { action: "onAddToCart" },
    id: { control: "number" }, // Added id to argTypes
    discountPercentage: { control: "number" }, // Added discountPercentage to argTypes
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    title: "Sample Product",
    description: "This is a sample product description.",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    id: 1, // Added id
    discountPercentage: 0, // Added discountPercentage
  },
};

export const WithLongDescription: Story = {
  args: {
    ...Default.args,
    description:
      "This is a longer description that provides more details about the product, including features and benefits.",
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    image: "https://via.placeholder.com/300",
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const handleAddToCart = () => {
      console.log("Product added to cart");
    };

    return (
      <ProductCard
        title="Interactive Product"
        description="Click to add this product to your cart."
        price={19.99}
        image="https://via.placeholder.com/150"
        onClick={handleAddToCart}
        id={2} // Added id
        discountPercentage={40} // Added discountPercentage
      />
    );
  },
};
