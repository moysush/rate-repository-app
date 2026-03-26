import { FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../../graphql/queries";
import ReviewItem from "./ReviewItem";

const MyReviews = () => {
  const { data, refetch } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: "cache-and-network",
  });
  const reviewNodes = data.me?.reviews?.edges.map((e) => e.node);

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem data={item} refetch={refetch} />}
      style={{ marginTop: 4 }}
    />
  );
};

export default MyReviews;
