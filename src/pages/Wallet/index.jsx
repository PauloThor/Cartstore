import Header from "../../components/Header";
import * as S from "./styles";
import { IoWalletOutline as WalletIcon } from "react-icons/io5";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import formatValue from "../../utils/formatValue";
import { useAuth } from "../../providers/Auth";

const Wallet = () => {
  const { token, user, getUserInfo } = useAuth();

  const history = useHistory();

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  if (!token) history.push("/");

  return (
    <S.Container>
      <Header />
      <S.Body>
        <S.WalletDiv>
          <WalletIcon size="200" />
          <S.H3>{formatValue(user?.cash || 0)}</S.H3>
          <S.DivButton>
            <Button
              onClick={() => history.push("/withdrawMoney")}
              color="black"
              width="95%"
              height="70%"
              style={{ fontSize: "17px", color: "white", cursor: "pointer" }}
            >
              Retirar Dinheiro
            </Button>
          </S.DivButton>
        </S.WalletDiv>
      </S.Body>
    </S.Container>
  );
};

export default Wallet;
