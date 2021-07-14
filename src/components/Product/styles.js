import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  margin: 1rem auto;
  background: gray;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  img {
    width: 220px;
    border: none;
    padding-top: 1rem;
  }

  h3 {
    color: #404040;
    font-size: 20px;
    font-weight: 600;
  }
  @media only screen and (min-width: 768px) {
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    img {
      max-width: 300px;
      width: 100%;
    }
    h3 {
      color: white;
      border-bottom: 1px solid white;
      font-size: 30px;
    }
  }
`;
export const Datas = styled.div`
  @media only screen and (min-width: 768px) {
    color: white;
    p,
    h6 {
      padding: 0.5rem;
    }
    p {
      font-weight: bold;
      font-size: 22px;
    }
    h6 {
      border-bottom: 1px solid white;
      font-size: 25px;
    }
  }
`;

export const SellerPrice = styled.div`
  label {
    color: green;
  }

  p {
    color: #404040;
  }
`;

export const ClientPrice = styled.div`
  label {
    color: green;
    padding-right: 0.3rem;
  }

  h6 {
    font-size: 14px;
    margin: 1rem 0;
  }
  
`;
