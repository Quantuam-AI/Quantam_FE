import { AuthAction } from "./AuthSlice";
import axios from "axios";


export const login = () => {
    return async (dispatch) => {
        try {

            const response = await axios.post();

            // 로그인 성공 여부에 따라 로그인 성공 액션 디스패치
            if (response.success) {
                dispatch(AuthAction.loginSuccess(response.user));
            } else {
                // 로그인 실패 처리
            }
        } catch (error) {
            // 에러 처리
            console.error('Login failed:', error);
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(AuthAction.logout());
    }
};