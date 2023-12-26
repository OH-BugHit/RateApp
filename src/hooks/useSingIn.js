import { useMutation } from "@apollo/client";
import { SING_IN } from "../graphql/mutations";

const useSingIn = () => {
  const [mutate, result] = useMutation(SING_IN);

  const singIn = async ({ username, password }) => {
    console.log(`singin in with un: ${username} and pw: ${password}`);
    await mutate({ variables: { username: username, password: password } });
    return result;
  };
  //console.log(result);
  return [singIn, result];
};

export default useSingIn;
