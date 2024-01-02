import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import RepositoryList from "./RepositoriesAndReviews/RepositoryList";
import AppBar from "./AppBar/AppBar";
import SingIn from "./SingIn/SingIn";
import SingleRepository from "./RepositoriesAndReviews/SingleRepository";
import CreateReview from "./CreateReview/CreateReview";
import SingUp from "./SingUp/SingUp";
import MyReviews from "./RepositoriesAndReviews/MyReviews";

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
