import styled from "styled-components";
import quantum_ai from "../assets/quantum-ai.png";
import { useDispatch, useSelector } from "react-redux";
import { SigninAction } from "../store/SigninSlice";
import { signinAsync } from "../store/signin-action";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import MainNavigation from "../components/MainNavigation";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { memberId, memberPassword } = useSelector((state) => state.signin);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(signinAsync(memberId, memberPassword));
    navigate("/");
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Logo src={quantum_ai} alt="Quantum AI" />
          <Form onSubmit={handleSubmit}>
            <Label className={memberId && "filled"}>
              <PlaceHolders>ID</PlaceHolders>
              <Input
                type="text"
                id="id"
                value={memberId}
                onChange={(e) => dispatch(SigninAction.updateMemberId(e.target.value))}
              />
            </Label>
            <Label className={memberPassword && "filled"}>
              <PlaceHolders>Password</PlaceHolders>
              <Input
                type="password"
                id="password"
                value={memberPassword}
                onChange={(e) => dispatch(SigninAction.updateMemberPassword(e.target.value))}
              />
            </Label>
            <Button type="submit">Login</Button>
          </Form>
          <SignupLink to="/signup">회원가입</SignupLink>
          <HomeLink to="/">홈으로 가기</HomeLink>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

const Wrapper = styled.div`
  background: white;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  span {
    position: absolute;
    left: 13px;
    top: 14px;
    color: #999;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  &.filled span,
  &:focus-within span {
    top: -3px;
    left: 10px;
    font-size: 12px;
    color: #007bff;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
  background: #f9f9fa;
  color: black;
  margin-bottom: 0.9rem;
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
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.25rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const PlaceHolders = styled.span`
  margin: 7px 0px 5px 5px;
  /* font-size: 12px; */
`;

const Logo = styled.img`
  width: 60%;
  height: auto;
  display: block;
  margin: 0 auto 30px;

  @media (max-width: 500px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

const SignupLink = styled(Link)`
  margin-top: 10px;
  text-align: center;
  color: #007bff;
  text-decoration: underline;
  margin-right: 10px;
  cursor: pointer;
`;

const HomeLink = styled(Link)`
  margin-top: 10px;
  text-align: center;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
`;

export default Login;



