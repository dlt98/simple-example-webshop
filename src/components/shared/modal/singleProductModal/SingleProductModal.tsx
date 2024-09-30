import { Modal } from "../Modal";
import { useGetSingleProductQuery } from "@/hooks";
import { ProductModalContent } from "./components";
import { Spinner } from "@/components/shared";

interface IProps {
  productId: number | null;
  onModalClose: () => void;
}

export const SingleProductModal = ({ productId, onModalClose }: IProps) => {
  const { data, isFetching } = useGetSingleProductQuery(productId);

  return (
    <Modal
      isOpen={!!productId}
      onClose={onModalClose}
      title="Individual product display"
      maxWidth="max-w-4xl"
    >
      {isFetching && <Spinner />}
      {data && <ProductModalContent product={data} />}
    </Modal>
  );
};
