import { FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";
import ReviewItem from "./repositories/ReviewItem";

const MyReviews = () => {
  const { data } = useQuery(GET_CURRENT_USER);
  const reviewNodes = data.me.reviews.edges.map((e) => e.node);
  console.log(reviewNodes);

  return (
    <FlatList
      style={{ padding: 8 }}
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem data={item} />}
    />
  );
};

export default MyReviews;
