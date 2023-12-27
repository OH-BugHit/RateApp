import { useApolloClient, useMutation } from "@apollo/client";
import { SING_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

// hookki kirjautumiselle
const useSingIn = () => {
  const [mutate, result] = useMutation(SING_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const singIn = async ({ username, password }) => {
    console.log(`singin in with un: ${username} and pw: ${password}`);
    await mutate({
      variables: { username: username, password: password },
    });
    await authStorage.setAccessToken(result.data.authenticate.accessToken);
    apolloClient.resetStore();
    return result;
  };
  return [singIn, result];
};

export default useSingIn;
