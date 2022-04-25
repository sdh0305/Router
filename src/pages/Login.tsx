import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Box, Button, BoxLeft, BoxRight, ButtonWrap, SelectWrap, Select, WrapLogin } from "../styles/Styled";

const AREA_LIST = [
    { label: '강원도', value: 'Gangwon' },
    { label: '경기도', value: 'Gyeonggi' },
    { label: '서울특별시', value: 'Seoul' },
];

const SCHOOL_LIST = [
    { label: '원주 초교', value: "Wonju-Ele" },
    { label: '강릉 초교', value: "Gangrung-Ele" },
    { label: '양양 초교', value: "Yangyang-Ele" }
];

const GRADE_LIST = [
    { label: '1', value: "First-Grade" },
    { label: '2', value: "Second-Grade" },
    { label: '3', value: "Third-Grade" },
    { label: '4', value: "Fourth-Grade" },
    { label: '5', value: "Fifth-Grade" },
    { label: '6', value: "Sixth-Grade" },

]

const CLASS_LIST = [
    { label: '1', value: "First-" },
    { label: '2', value: "Second-Class" },
    { label: '3', value: "Third-Class" },
    { label: '4', value: "Fourth-Class" },
    { label: '5', value: "Fifth-Class" },
    { label: '6', value: "Sixth-Class" },

]

const Login = () => {
    return (
        <WrapLogin flex>
            <Box flex>
                <BoxLeft>
                    <h1>
                        자가 검사<br />키트 등록 현황
                    </h1>
                    <img src="/img/login-icon.png" alt="로그인 아이콘" width={'100px'} height={'100px'} />
                </BoxLeft>
                <BoxRight>
                    <p>진단 지역</p>
                    <Select>
                        {AREA_LIST.map(({ label, value }) => (
                            <option value={value}>{label}</option>
                        ))}
                    </Select>
                    <p>진단 기관</p>
                    <Select>
                        {SCHOOL_LIST.map(({ label, value }) => {
                            return (
                                <option value={value}>{label}</option>
                            )
                        })}
                    </Select>
                    <SelectWrap flex>
                        <div>
                            <p>학년</p>
                            <Select>
                                {GRADE_LIST.map(({ label, value }) => {
                                    const REALlabel = label + '학년';
                                    return (
                                        <option value={value}>{REALlabel}</option>
                                    )
                                })}
                            </Select>
                        </div>
                        <div>
                            <p>반</p>
                            <Select>
                                {CLASS_LIST.map(({ label, value }) => {
                                    const REALlabel = label + '반';
                                    return (
                                        <option value={value}>{REALlabel}</option>
                                    )
                                })}
                            </Select>
                        </div>
                    </SelectWrap>
                    <ButtonWrap>
                        <Button className='LoginBtn' ok><Link to={"/main"}>확인</Link> </Button>
                    </ButtonWrap>
                </BoxRight>

            </Box>
        </WrapLogin>
    );
}


export default Login;