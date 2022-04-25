import styled from "styled-components";

interface Props {
    flex?: any;
}

interface ButtonProps {
    ok?: any;
}

export const Wrapper = styled.div<Props>`
width: 100vw;
height: 100vh;
display: ${props => props.flex && 'flex'};
justify-content: center;
align-items: center;

`;

export const WrapLogin = styled(Wrapper)`
background-color: #ffe89b;

`;

export const Box = styled.div<Props>`
width: 850px;
height: 600px; 
display: ${props => props.flex && 'flex'};
flex-wrap: nowrap;
background-color: white;
border-radius: 30px;

`;

export const BoxLeft = styled(Box)`
width: 350px;
height: 600px;
background-color: #ff8800;
border-top-right-radius: 0px;
border-bottom-right-radius: 0px;
text-align: center;
line-height: 60px;
font-size: 20px;
font-weight: 800;
color: white;
    h1 {
        padding-top: 100px;
    }   
    img {
        padding-top: 100px;
    }
`;

export const BoxRight = styled(Box)`
width: 400px;
height: 450px;
padding: 100px 0 50px 100px;
border-top-left-radius: 0px;
border-bottom-left-radius: 0px;
    p{
        margin: 20px 10px 10px 20px;
        color: #999;
        font-weight: 700;
    }

`;

export const Select = styled.select`
width: 310px;
font-size: 20px;
font-weight: 600;
border: 1px solid #999;
border-radius: 30px;
padding: 0.8em 1em;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
background: url(/img/select-box.jpg) no-repeat 95%; 

    select::-ms-expand{
            display: none;
        }

`;

export const SelectWrap = styled(Wrapper)`
width: 400px;
height: 100px;
justify-content: left;
    div{
        margin-right: 10px;
    }
    select{
        width: 150px;

    }

`;

export const ButtonWrap = styled.div`
width: auto;
display: flex;

    .LoginBtn{
        margin: 40px 0 0 30px;
    }

    .MainBtn{
        margin-right: 40px;
    }

`;

export const Button = styled.button<ButtonProps>`
width: 250px;
padding: ${props => props.ok && '3px 0 3px 0'};
border: ${props => props.ok ? 'none' : '2px solid #ff8800'};
border-radius: 30px;
font-size: 20px;
font-family: bolder;
line-height: 50px;
color: ${props => props.ok ? 'white' : '#ff8800'};
background-color: ${props => props.ok ? '#ff8800' : 'white'};


`;

export const MainHead = styled(Wrapper)`
width: 90%;
height: 200px;
min-width: 1024px;
margin: 0 auto;
justify-content: space-between;
border-bottom: 1px solid #979797;    
  
    div{
        width: 400px;
        text-align: center;
    }

    img{
        margin-bottom: -10px;
    }

    h1{
        display: inline-block;
        color: #ff8800; 
    }
    
`;

export const UpperSelect = styled(Wrapper)`
width: 400px;
height: 50px;
justify-content: space-between;
border: 1px solid #979797;
border-radius: 50px;
font-size: 20px;
color: #979797;

    div{
        width: 100px;
        padding: 5px 13px;
        border-right: 1px solid #979797;
    }
    
`;

export const SelectUpper = styled(Select)`
width: 150px;
border: none;
outline: 0;

`;

export const LoginData = styled.div`
width: 90%;
height: 80px;
min-width: 1024px; 
margin: 0 auto;
display: flex;
justify-content: space-between;

    ul{ 
        width: 1000px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        
        li{
            display: inline-block;
            padding: 0 95px;
            font-size: 20px;
            font-weight: 600;
            color: #979797;
        }
        
        .liBorder {
            border-left: 1px solid #979797;
            
        }

    }

`;

export const Table = styled.table`
width: 90%;
margin: 0 auto;
line-height: 70px;
text-align: center;
font-size: 20px;
font-weight: 600;
border: 0;
border-radius: 30px;
border-spacing: 0;
box-shadow: 1px 1px 30px -10px #979797;

    thead{
        color: #ff8800;
        
        th{
            border-bottom: 1px solid #ECECEC;
        }

    }

    tbody{
        tr:nth-child(2n-1){
            background-color: #fbfafa;
        }
        

        div{
            display: flex;
            justify-content: center;
            align-items: center;

            .span1 {
                padding: 0 5px;
                font-size: 16px;
                color: #979797;
                font-weight: 400;
            }

        

            #switch{
                position: absolute;
                /* Hidden */
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
            }
            
            .switch_label{
                position: relative;
                width: 70px;
                height: 35px;
                display: inline-block;
                background-color: #fff;
                border: 1px solid #979797;
                border-radius: 20px;
                cursor: pointer;
                transition: 0.2s;
            
                &:hover{
                    background-color: #efefef;
                }
            }

            .onf_btn{
                position: absolute;
                top: 5px;
                left: 5px;
                width: 25px;
                height: 25px;
                display: inline-block;
                background: #58C950;
                border-radius: 20px;
                transition: 0.2s;
            }

            #switch:checked+.switch_label{
                background: #c44;
                border: 1px solid #c44;
            }

            #switch:checked+.switch_label:hover{
                background: #e55;

            }

            #switch:checked+.switch_label .onf_btn{
                left: 40px;
                background: #58c950;
                box-shadow: 1px 2px 3px #00000020;
            }
        }       
    }
`;

export const TableIndex = styled(Wrapper)`
width: 90%;
height: auto;
min-width: 1024px;
margin: 20px auto;
justify-content: space-between;

    img{
        background-color: #fbfafa;
        border-radius: 50%;
        padding: 10px;
    }

    ul{
        width: 300px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 0px;

        li{
            display: inline-block;
            margin-bottom: 6px;
            padding: 10px 20px;
            font-size: 20px;
            font-weight: 600;

        }

        .accent{
            border-radius: 50%;
            background-color: #ff8800;
            color: white;
        }

    }

    div{
        width: auto;
        display: flex;
    }
    

`;