import { SigninAction } from "./SigninSlice";
import axios from "axios";

export const signinAsync = (id, password) => async (dispatch) => {
    try {
        const response = await axios.post(`http://101.101.211.67:8080/user/login?memberId=${id}&memberPassword=${password}`);

        if (!response.data) {
            throw new Error("로그인에 실패하였습니다.");
        }

        // 추가: 로그인 성공 시 상태 업데이트
        dispatch(SigninAction.signinSuccess(response.data.data.id));

        const loginId = response.data.data.id;
        // console.log(loginId);

        return loginId;
    } catch (error) {
        // 예외 처리가 필요하면 여기에 추가
        console.error(error);
        alert("로그인 실패");
        throw new Error("로그인에 실패하였습니다.");

    }
};

export const signoutAsync = () => async (dispatch) => {
    try{
        const response = await axios.post("http://101.101.211.67:8080/logout");

        if(!response.data){
            throw new Error("로그아웃에 실패하였습니다.");
        }

        dispatch(SigninAction.signout());
    } catch(error){
        console.error(error);
        throw new Error("로그아웃에 실패하였습니다.");
    }
}