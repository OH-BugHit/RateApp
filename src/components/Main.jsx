import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SingIn from "./SingIn";
import SingleRepository from "./SingleRepository";
import CreateReview from "./CreateReview";
import SingUp from "./SingUp";
import MyReviews from "./MyReviews";

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/login" element={<SingIn />} />
        <Route path="/repository/:id" element={<SingleRepository />} />
        <Route path="/create_review" element={<CreateReview />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/my_reviews" element={<MyReviews />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
