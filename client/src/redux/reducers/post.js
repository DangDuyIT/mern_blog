import { INIT_STATE } from "../../constant";
import { getPosts, getType } from "../actions";

export default function postReducer(state = INIT_STATE.post, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest) /* get Post request */:
      return {
        ...state,
        isLoading: true,
      };

    case getType(getPosts.getPostsSuccess) /* get Post Succes */:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPosts.getPostsFailure) /* get Post Succes */:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
