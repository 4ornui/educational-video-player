export interface FormState {
    user_id: string;
    description: string;
    video_url: string;
    title: string;
}

export type FormAction =
    | { type: "SET_USER_ID"; payload: string }
    | { type: "SET_DESCRIPTION"; payload: string }
    | { type: "SET_VIDEO_URL"; payload: string }
    | { type: "SET_TITLE"; payload: string }
    | { type: "RESET_FORM" };

export const initialFormState: FormState = {
    user_id: "",
    description: "",
    video_url: "",
    title: "",
};
export const formReducer = (
    state: FormState,
    action: FormAction
): FormState => {
    switch (action.type) {
        case "SET_USER_ID":
            return { ...state, user_id: action.payload };
        case "SET_DESCRIPTION":
            return { ...state, description: action.payload };
        case "SET_VIDEO_URL":
            return { ...state, video_url: action.payload };
        case "SET_TITLE":
            return { ...state, title: action.payload };
        case "RESET_FORM":
            return initialFormState;
        default:
            return state;
    }
};
