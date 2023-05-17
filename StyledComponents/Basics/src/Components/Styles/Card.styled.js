import styled from 'styled-components';

export const StyledCard = styled.div`
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    display: flex;
    border-radius: 15px;
    margin:40px 0;
    background-color: #fff;
    padding: 60px;
    align-items: center;
    flex-direction: ${({ layout }) => layout};

    img{
        width: 80%;
    }

    &>div{
        flex:1;
    }

    @media(max-width: ${({ theme }) => theme.mobile}){
        flex-direction: column;
    }
    `