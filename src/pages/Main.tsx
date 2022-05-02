import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonWrap, Button, Wrapper, MainHead, UpperSelect, SelectUpper, LoginData, Table, TableIndex, BtnLabel, Btn, BtnWrapper, } from "../styles/Styled"

const SELFKIT_LIST = [
    { label: '코로나19', value: 'COVID-19' },
    { label: '독감접종', value: 'Flu' },
    { label: '홍역', value: 'Measles' },
]

interface UserProps {
birthday: string;
device_id: string;
hospital_id: number;
kit_manage_id: number;
phone_number: string;
reg_dt: string;
result: string;
sex: string;
type: string;
update_dt: null
user_id: string;
username: string;
}

const Main = () => {
    const [user, setUser] = useState<UserProps[]>([]);
    

    useEffect(() => {
        axios.post('http://210.109.61.255:8000/result/list/', {
            hospital_id: 1

        })
            .then(response => {
                const { data } = response.data
                setUser(data)
            })
            .catch(error => {
                console.log('User Error');
            })
    }, []);

    const changeHandler = (e: any) => {
        const {checked, name} = e.target;
        const result = checked ? '양성' : '음성';

        const test = user.filter((res, index) => index == name ? res.result = result : res);

        const testArray = [];

        for(var i = 0; i < user.length; i++) {
            if (user[i].result == '음성') console.log(false);
        }

        setUser(test);

        
    }



    return (
        <Wrapper>
            <MainHead flex>
                <div></div>
                    <div>
                        <img src="/img/main-icon.png" alt="메인 아이콘" width={'40px'} height={'40px'} />
                        <h1>자가 검사 키트 등록 현황</h1>
                    </div>
                <UpperSelect flex>
                    <div>진단 키트</div>
                    <SelectUpper>
                        {SELFKIT_LIST.map(({ label, value }) => (
                            <option value={value}>{label}</option>
                        ))}
                    </SelectUpper>
                </UpperSelect>
            </MainHead>
            <LoginData>
                <p>
                    <Link to={"/"}><img src="/img/backward-track.png" alt="뒤로가기" width={'40px'} height={'40px'} /></Link>
                </p>
                <ul>
                    <li>강원도</li>
                    <li className='liBorder'>원주 초교</li>
                    <li className='liBorder'>3학년</li>
                    <li className='liBorder'>4반</li>
                </ul>
                <div></div>
            </LoginData>
            <Table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>진단 결과</th>
                        <th>전화번호(본인)</th>
                        <th>전화번호(담임)</th>
                        <th>전화번호(보호자)</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((res: { username: string; result: any; phone_number: any }, index: any, data) => {
                        console.log("testData", data);
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{res.username}</td>
                                <BtnWrapper>
                                        <span>음성</span>   
                                        <Btn 
                                            id={index}
                                            name={index}
                                            type={'checkbox'} 
                                            checked={res.result == '양성' ? true: false} 
                                            onChange={(event) => changeHandler(event)}
                                        />
                                        <BtnLabel htmlFor={index} />
                                        <span>양성</span>
                                </BtnWrapper>
                                <td>{res.phone_number}</td>
                                <td>{res.phone_number}</td>
                                <td>{res.phone_number}</td>
                            </tr>
                            
                    )
                    })}
                </tbody>
            </Table>
            <TableIndex flex>
                <div>
                    <p>
                        <img src="/img/backward-arrow.png" alt="이전페이지" width={'20px'} height={'20px'} />
                    </p>
                    <ul>
                        <li className="accent">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                    <p>
                        <img src="/img/forward-arrow.png" alt="다음페이지" width={'20px'} height={'20px'} />
                    </p>
                </div>
                <div></div>
                <div>
                    <ButtonWrap>
                        <Button ok className="MainBtn"><strong>저장</strong></Button>
                        <Button><strong>메시지 발송</strong></Button>
                    </ButtonWrap>
                </div>
            </TableIndex>
        </Wrapper>
    )
}


export default Main;
