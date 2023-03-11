import { ModalPayload } from "./types";
import { initialState, showModalActionCreator, uiReducer } from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When invoked with a showModal action and passed as modal with the tesx 'Invalid credentials' and the isError to true", () => {
    test("Then it should set the currentState of isError to true", () => {
      const modal: ModalPayload = {
        isError: true,
        modal: "Invalid credentials.",
      };

      const expectedUiState: ModalPayload = {
        isError: modal.isError,
        modal: modal.modal,
      };

      const showModalAction = showModalActionCreator(modal);
      const newModalState = uiReducer(initialState, showModalAction);

      expect(newModalState).toStrictEqual(expectedUiState);
    });
  });
});
