import styled from "styled-components";

export const AreaHeader = styled.div`
    height: 80px;
    background-color: #791E94;
    color: #fff;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
        
    }

        .logo{
            flex: 1;

        }

        nav{
            ul{
                display: flex;
            }
            li{
                list-style: none;
                margin-left:20px;
            }
        }
`;