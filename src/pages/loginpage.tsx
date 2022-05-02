import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, BoxLeft, BoxRight, Button, ButtonWrap, WrapLogin } from "../styles/Styled";

const LoginPage = (props?: any) => {


    // id 및 pwd 값
    const [id, setId] = useState();
    const [pwd, setPwd] = useState();

    // id 및 pwd 값을 set에 넣기
    const getId = (value: any) => setId(value);
    const getPwd = (value: any) => setPwd(value);

    // 다른 페이지 이동
    const nav = useNavigate();

    // id 및 pwd 값을 api로 보내기
    const pushBtn = () => {
        axios.post('http://210.109.61.255:8000/auth/login', {
            auth_id: id,
            password: pwd
        })
            //응답이 있다면 message를 받아온다.
            .then(res => {
                const { message } = res.data

                // message 값에 따른 action
                // 1. 이상 없다면 Link를 통해 넘어가기 2. 이상이 있다면 돌아가기(경고문구 alert)
                if (message === 'OK') {
                    nav("/main")
                }
                else {
                    alert('아이디와 비밀번호를 확인하세요');
                }

            })
    }
    return (
        <WrapLogin flex>
            <Box flex>
                <BoxLeft>
                    <h1>자가 검사<br/>키트 등록 현황</h1>
                    <img src="/img/login-icon.png" alt="로그인 아이콘" width={ "100px" } height={ "100px" } />
                </BoxLeft>
                <BoxRight>
                    <p>ID</p>
                    <input onChange={(event) => getId(event.target.value)} />
                    {/* <p>Password</p>
                    <input onChange={(event) => getPwd(event.target.value)} /> */}
                    <ButtonWrap>
                        <Button ok className="LoginBtn" onClick={pushBtn}>로그인</Button>
                    </ButtonWrap>

                </BoxRight>
            </Box>
        </WrapLogin>
    )
}
export default LoginPage;