import { SigninAction } from "./SigninSlice";
import axios from "axios";

export const signinAsync = (data) => async (dispatch) => {
    try {
        const response = await axios.post("http://101.101.211.67:8080/user/login", data);

        if (!response.data) {
            throw new Error("로그인에 실패하였습니다.");
        }

        // 추가: 로그인 성공 시 상태 업데이트
        dispatch(SigninAction.signinSuccess(response.data));
    } catch (error) {
        // 예외 처리가 필요하면 여기에 추가
        console.error(error);
        throw new Error("로그인에 실패하였습니다.");
    }
};