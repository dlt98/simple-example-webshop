import { IProduct } from "@/types";
import { ReviewStars } from "./ReviewStars";

interface IProps {
  reviews: IProduct["reviews"];
}

export const CustomerReviews = ({ reviews }: IProps) => {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-xl font-semibold">Customer Reviews</h3>
      {reviews.map(({ rating, reviewerName, comment, date }, index) => (
        <div key={index} className="mb-4 rounded-lg bg-gray-100 p-4">
          <div className="mb-2 flex items-center">
            <ReviewStars rating={rating} />
            <span className="ml-2 text-gray-600">{reviewerName}</span>
          </div>
          <p className="text-gray-700">{comment}</p>
          <p className="mt-1 text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};
