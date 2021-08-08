import { INIT_STATE } from "../../constant";
import { getPost, getType } from "../actions";

export default function postReducer(state = INIT_STATE.post, action) {
  switch (action.type) {
    case getType(getPost.getPostRequest) /* get Post request */:
      return {
        ...state,
        isLoading: true,
      };

    case getType(getPost.getPostSuccess) /* get Post Succes */:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPost.getPostFailure) /* get Post Succes */:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
