import { useDispatch, useSelector } from "react-redux";
import { SignupAction } from "../store/SignupSlice";
import { signupAsync } from "../store/signup-action";

const SignUp = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.signup.formData);

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        dispatch(signupAsync(formData));
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>아이디</label>
                <input
                    type="text"
                    id="id"
                    onChange={(e) => { dispatch(SignupAction.updateFormData({ memberId: e.target.value })) }}
                />
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