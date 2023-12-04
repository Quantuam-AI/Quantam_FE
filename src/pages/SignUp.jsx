import { useDispatch, useSelector } from "react-redux";
import { SignupAction } from "../store/SignupSlice";
import { signupAsync, checkDuplicate } from "../store/signup-action";
import { useState } from "react";

const SignUp = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.signup.formData);
    const [isIdChecked, setIsIdChecked] = useState(false);
    const [isIdAvailable, setIsIdAvailable] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        dispatch(signupAsync(formData));
    }

    const onCheck = async () => {
        try {
            const duplicateCheckResult = await dispatch(checkDuplicate(formData.memberId));
            if (duplicateCheckResult.isDuplicate) {
                setIsIdAvailable(false);
                alert("이미 사용 중인 아이디입니다.");
            } else {
                setIsIdAvailable(true);
                alert("사용 가능한 아이디입니다.");
            }
            setIsIdChecked(true);
        } catch (error) {
            console.error(error);
            alert("중복 체크에 실패하였습니다.");
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>아이디</label>
                <input
                    type="text"
                    id="id"
                    onChange={(e) => { dispatch(SignupAction.updateFormData({ memberId: e.target.value })) }}
                />
                <button type="button" onClick={onCheck}>중복체크</button>
                {isIdChecked && (
                    <div>
                        {isIdAvailable
                            ? "사용 가능한 아이디입니다."
                            : "이미 사용 중인 아이디입니다."}
                    </div>
                )}
                <label>비밀번호</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => { dispatch(SignupAction.updateFormData({ memberPassword: e.target.value })) }}
                />
                <label>이름</label>
                <input
                    type="text"
                    id="name"
                    onChange={(e) => { dispatch(SignupAction.updateFormData({ memberName: e.target.value })) }}
                />
                <label>이메일</label>
                <input
                    type="email"
                    id="email"
                    onChange={(e) => { dispatch(SignupAction.updateFormData({ memberMail: e.target.value })) }}
                />
                <button type="submit">회원가입하기</button>
            </form>
        </div>
    )
}

export default SignUp;