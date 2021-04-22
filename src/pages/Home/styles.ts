import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background-color: var(--bg-box);
  display: flex;
  padding: 10px var(--paddingDinamic) 10px var(--paddingDinamic);
  align-items: center;
  justify-content: space-between;

  img{
    width: 150px;
  }
  nav{
    a{
      color: var(--white);
      font-size: 20px;
      transition: 0.3s;
      margin: 0 15px;
      &:hover{
        color: var(--orange);
      }
    }
    a.selected{
      color: var(--orange);
    }
  }
  @media(max-width: 968px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const Main = styled.section`
  width: 100%;
  padding: 10px var(--paddingDinamic) 10px var(--paddingDinamic);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  main{
    width: 64%;
    h1{
      color: var(--gray);
      font-weight: 500;
      margin-bottom: 15px;
    }
  }
  aside{
    margin-top: 40px;
    width: 34%;
    background: var(--bg-box);
    border-radius: 15px;
    padding: 15px;
    h2{
      color: var(--white);
      font-weight: 500;
      margin-bottom: 10px;
    }
    .limpar{
     background-color: transparent;
    border: 1px solid var(--orange);
    margin-top:5px;
    color: var(--orange);
      &:hover{
          background: var(--orangeH);
          color: var(--white);
      }
    }
    .itens{
      p{
        color: var(--gray);
        font-weight: 300;
        margin-bottom: 5px;
        font-size: 14px;
        span{
        font-weight: 500;
        }
      }
    }
    .linha{
      height: 1px;
      width: 100%;
      background-color: #1C1C1C;
      margin: 15px 0px 10px 0px;
    }
    .total{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      h3{
        color: var(--white);
        font-weight: 500;
        display: inline;
      }
    }
    button{
      background: var(--orange);
      border:none;
      color: var(--white);
      width: 100%;
      height: 40px;
      border-radius: 75px;
      transition: 0.3s;
      cursor: pointer;
      &:hover{
          background: var(--orangeH);
      }
    }
  }
  @media(max-width: 600px) {
    flex-direction: column;
    main{
    width: 100%;
    }  
    aside{
    width: 100%;
    }
  }
`;
export const Card = styled.div`
    background-color: var(--bg-box);
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 15px;
    margin-bottom: 10px;
    @media(max-width: 600px) {
      button{width: 100%;}
    }
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    div{
      padding-left: 10px;
      width: 100%;
      h2{
        width: 100%;
        font-size: 20px;
        color: var(--white);
        margin-bottom: 5px;
        font-weight: 500;
      }
      span{
        display: block;
        font-weight: 300;
        color: var(--gray);
        font-size: 12px;
        margin-bottom: 10px;
      }
      button{
        display: inline-block;
        background: var(--orange);
        border: none;
        width: 150px;
        color: var(--white);
        height: 30px;
        border-radius: 75px;
        font-size: 15px;
        cursor: pointer;
        margin-right: 15px;
        transition: 0.3s;
        &:hover{
          background-color: var(--orangeH);
        }
        .ico{
          margin-bottom: -2px;
        }
        @media(max-width: 450px) {
          width: 100%;
        }
      }
      h3{
        display: inline;
        color: var(--white);
        font-weight: 500;
      }
    }
    
`;
