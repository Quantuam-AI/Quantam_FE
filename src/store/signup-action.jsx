import { SignupAction } from "./SignupSlice";
import axios from "axios";

export const signupAsync = (data) => async (dispatch) => {
    try {
        const response = await axios.post("http://101.101.211.67:8080/user", data);

        if (!response.data) {
            throw new Error("회원가입에 실패하였습니다.");
        }

        // 추가: 회원가입 성공 시 상태 업데이트
        dispatch(SignupAction.signupSuccess(response.data));
    } catch (error) {
        // 예외 처리가 필요하면 여기에 추가
        console.error(error);
        throw new Error("회원가입에 실패하였습니다.");
    }
};