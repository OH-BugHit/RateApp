import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import { SingInContainer } from "../../components/SingIn";
const onSubmit = jest.fn();

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      render(<SingInContainer onSubmit={onSubmit} />);

      fireEvent.changeText(screen.getByPlaceholderText("Username"), "kalle");
      fireEvent.changeText(screen.getByPlaceholderText("Password"), "password");
      fireEvent.press(screen.getByText("Log in"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});
