import { useMutation } from "@apollo/client";
import { SING_UP } from "../graphql/mutations";

// hookki kirjautumiselle
const useSingUp = () => {
  const [mutate, result] = useMutation(SING_UP); // TÄMÄ

  const singUp = async ({ username, password }) => {
    console.log(`sing up with un: ${username} and pw: ${password}`);
    const result = await mutate({
      variables: { username: username, password: password },
    });
    return result;
  };
  return [singUp, result];
};

export default useSingUp;
