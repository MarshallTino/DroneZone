import { ModalPayload, UiState } from "./types";
import {
  initialState,
  resetModalActionCreator,
  setIsLoadingActionCreator,
  showModalActionCreator,
  uiReducer,
  unSetIsLoadingActionCreator,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When invoked with a showModal action and passed as a modal with the text 'Invalid credentials' and the isError to true", () => {
    test("Then it should set the currentState of isError to true and the modal to 'Invalid credentials'", () => {
      const modal: ModalPayload = {
        isError: true,
        modal: "Invalid credentials.",
      };

      const expectedUiState: UiState = {
        isLoading: false,
        isError: modal.isError,
        modal: modal.modal,
      };

      const showModalAction = showModalActionCreator(modal);
      const newModalState = uiReducer(initialState, showModalAction);

      expect(newModalState).toStrictEqual(expectedUiState);
    });
  });

  describe("When invoked with a resetModal action", () => {
    test("Then it should set the currentState of isError to false and the modal to ''", () => {
      const expectedUiState: UiState = {
        isLoading: false,
        isError: false,
        modal: "",
      };

      const newModalState = uiReducer(initialState, resetModalActionCreator());

      expect(newModalState).toStrictEqual(expectedUiState);
    });
  });

  describe("When invoked with a setIsLoadingActionCreator", () => {
    test("Then it should set the isLoading to true", () => {
      const expectedUiState: UiState = {
        isError: false,
        isLoading: true,
        modal: "",
      };

      const newUiState = uiReducer(initialState, setIsLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When invoked with a unsetIsLoadingActionCreator", () => {
    test("Then it should set the isLoading to false", () => {
      const expectedUiState: UiState = {
        isError: false,
        isLoading: false,
        modal: "",
      };

      const currentUiState: UiState = {
        isError: false,
        isLoading: true,
        modal: "",
      };

      const newUiState = uiReducer(
        currentUiState,
        unSetIsLoadingActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
