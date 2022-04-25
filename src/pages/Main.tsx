import React from "react";
import { Link } from "react-router-dom";
import { ButtonWrap, Button, Wrapper, MainHead, UpperSelect, SelectUpper, LoginData, Table, TableIndex, } from "../styles/Styled"

const SELFKIT_LIST = [
    { label: '코로나19', value: 'COVID-19' },
    { label: '독감접종', value: 'Flu' },
    { label: '홍역', value: 'Measles' },
]

const Main = () => {
    return (
        <Wrapper>
            <MainHead flex>
                <div></div>
                <p>
                    <img src="/img/main-icon.png" alt="메인 아이콘" width={'40px'} height={'40px'} />
                    <h1>자가 검사 키트 등록 현황</h1>
                </p>
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
                    <tr>
                        <td>1</td>
                        <td>김나라</td>
                        <td>
                            <div>
                                <span className='span1'>음성</span>
                                <input type={'checkbox'} id='switch' />
                                <label htmlFor='switch' className="switch_label">
                                    <span className="onf_btn"></span>
                                </label>
                                <span className='span1'>양성</span>
                            </div>
                        </td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>홍나라</td>
                        <td>
                            <div>
                                <span className='span1'>음성</span>
                                <input type={'checkbox'} id='switch' />
                                <label htmlFor='switch' className="switch_label">
                                    <span className="onf_btn"></span>
                                </label>
                                <span className='span1'>양성</span>
                            </div>
                        </td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>임나라</td>
                        <td>
                            <div>
                                <span className='span1'>음성</span>
                                <input type={'checkbox'} id='switch' />
                                <label htmlFor='switch' className="switch_label">
                                    <span className="onf_btn"></span>
                                </label>
                                <span className='span1'>양성</span>
                            </div>
                        </td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>강나라</td>
                        <td>
                            <div>
                                <span className='span1'>음성</span>
                                <input type={'checkbox'} id='switch' />
                                <label htmlFor='switch' className="switch_label">
                                    <span className="onf_btn"></span>
                                </label>
                                <span className='span1'>양성</span>
                            </div>
                        </td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>양나라</td>
                        <td>
                            <div>
                                <span className='span1'>음성</span>
                                <input type={'checkbox'} id='switch' />
                                <label htmlFor='switch' className="switch_label">
                                    <span className="onf_btn"></span>
                                </label>
                                <span className='span1'>양성</span>
                            </div>
                        </td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>유나라</td>
                        <td>
                            <div>
                                <span className='span1'>음성</span>
                                <input type={'checkbox'} id='switch' />
                                <label htmlFor='switch' className="switch_label">
                                    <span className="onf_btn"></span>
                                </label>
                                <span className='span1'>양성</span>
                            </div>
                        </td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>한나라</td>
                        <td>
                            <div>
                                <span className='span1'>음성</span>
                                <input type={'checkbox'} id='switch' />
                                <label htmlFor='switch' className="switch_label">
                                    <span className="onf_btn"></span>
                                </label>
                                <span className='span1'>양성</span>
                            </div>
                        </td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>이나라</td>
                        <td>
                            <div>
                                <span className='span1'>음성</span>
                                <input type={'checkbox'} id='switch' />
                                <label htmlFor='switch' className="switch_label">
                                    <span className="onf_btn"></span>
                                </label>
                                <span className='span1'>양성</span>
                            </div>
                        </td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>권나라</td>
                        <td>
                            <div>
                                <span className='span1'>음성</span>
                                <input type={'checkbox'} id='switch' />
                                <label htmlFor='switch' className="switch_label">
                                    <span className="onf_btn"></span>
                                </label>
                                <span className='span1'>양성</span>
                            </div>
                        </td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>장나라</td>
                        <td>
                            <div>
                                <span className='span1'>음성</span>
                                <input type={'checkbox'} id='switch' />
                                <label htmlFor='switch' className="switch_label">
                                    <span className="onf_btn"></span>
                                </label>
                                <span className='span1'>양성</span>
                            </div>
                        </td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                        <td>010.1234.5678</td>
                    </tr>
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
