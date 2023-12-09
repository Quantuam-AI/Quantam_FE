import { useDispatch, useSelector } from "react-redux";
import { SignupAction } from "../store/SignupSlice";
import { signupAsync } from "../store/signup-action";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignUpDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  form {
    width: 400px;
    text-align: left;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    label {
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-size: 16px;
      color: #aea9b4;
      margin-bottom: 8px;
      display: block;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 16px;
      box-sizing: border-box;
      background: #f9f9fa;
      color: black;
      border-radius: 4px;
      outline: 0;
      border: 1px solid rgba(245, 245, 245, 0.7);
      font-size: 14px;
      transition: all 0.3s ease-out;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);

      :focus,
      :hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
      }
    }

    button {
      width: 100%;
      padding: 12px;
      font-size: 1rem;
      cursor: pointer;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      transition: background-color 0.2s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  .go-home-button {
    margin-top: 16px;
    padding: 12px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.2s;

    &:hover {
      background-color: #218838;
    }
  }
`;
const HomeLink = styled(Link)`
  margin-top: 10px;
  text-align: center;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
`;


const SignUp = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.signup.formData);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(signupAsync(formData));
        navigate('/');
    };


    return (
        <SignUpDiv>
            <form onSubmit={onSubmit}>
                <label>아이디</label>
                <input
                    type="text"
                    id="id"
                    onChange={(e) => {
                        dispatch(SignupAction.updateFormData({ memberId: e.target.value }));
                    }}
                />
                <label>비밀번호</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => {
                        dispatch(SignupAction.updateFormData({ memberPassword: e.target.value }));
                    }}
                />
                <label>이름</label>
                <input
                    type="text"
                    id="name"
                    onChange={(e) => {
                        dispatch(SignupAction.updateFormData({ memberName: e.target.value }));
                    }}
                />
                <label>이메일</label>
                <input
                    type="email"
                    id="email"
                    onChange={(e) => {
                        dispatch(SignupAction.updateFormData({ memberMail: e.target.value }));
                    }}
                />
                <button type="submit">회원가입하기</button>
                <HomeLink to="/">홈으로 가기</HomeLink>
            </form>
        </SignUpDiv>
    );
};

export default SignUp;
