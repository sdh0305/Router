
const Login: React.FC = React.memo(() => {

    // STATE
    const [user, setUser] = useState<LOGIN_FORM_STATE>({
      auth_id: '',
      password: '',
    });
  
    // ROUTER
    const router = useRouter();
  
    // DISPATCH
    const dispatch = useDispatch();
  
    // HANDLER
    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    };
  
    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      LoginApi.login(user).then(({ status, data }) => {
        const { message, data: result_data } = data;
        //const { data, status } = res;
        if (message == 'OK') {
          console.log(result_data, "result");
          dispatch(authLogin(result_data));
          router.push('/');
        } else {
          alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
        }
      });
    };
  
    return (
      <MainStyled>
        <MainInner>
          <MainDiv action="" method="POST" onSubmit={formSubmit}>
            <h1>로그인</h1>
            <p>예방접종통합시스템에 오신 것을 환영합니다!</p>
            <div className="inputDiv">
              <img className="inputImg" src={staticUrl('/static/images/id-icon.svg')} />
              <input
                className="postInput"
                name="auth_id"
                value={user.auth_id}
                placeholder="아이디를 입력해주세요."
                onChange={handleSubmit}
              />
            </div>
            <div className="inputDiv">
              <img className="inputImgTwo" src={staticUrl('/static/images/pw-icon.svg')} />
              <input
                className="postInput"
                type="password"
                value={user.password}
                name="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={handleSubmit}
              />
            </div>
            {/* <Control>
              <div>
                <input type="checkbox" id="cd1" />
                <label htmlFor="cd1"></label>
                <span style={{ position: 'relative', bottom: '13px', left: '14px' }}>아이디 저장하기</span>
              </div>
              <div style={{ color: '#a6a6a6', margin: ' 0 0 0 200px' }}>
                <a>아이디</a> / <a>비밀번호 찾기</a>
              </div>
            </Control> */}
            <Button
              size={{
                width: '225px',
                height: '67px',
              }}
              border={{
                radius: '33.5px',
              }}
              font={{
                size: '24px',
                weight: 'bold',
              }}
            >
              로그인
            </Button>
          </MainDiv>
          {/* <SideDiv>
            <GridDiv>
              <img
                style={{
                  margin: '0 auto',
                  width: '120px',
                  paddingBottom: '20px',
                }}
                src={staticUrl('/static/logo/logo.svg')}
              />
              {MENU_RIGHT_LIST.map(({ label, title, icon }) => (
                <div>
                  <img src={staticUrl(`/static/images/${icon}.svg`)} />
                  <div>
                    <span style={{ opacity: '0.5' }}>{title}</span>
                    <span>{label}</span>
                  </div>
                </div>
              ))}
            </GridDiv>
          </SideDiv> */}
        </MainInner>
      </MainStyled>
    );
  });
  
  
  export default Login;