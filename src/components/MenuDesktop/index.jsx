import { useHistory } from "react-router";
import { useAuth } from "../../providers/Auth";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { useEffect } from "react";
import { useCart } from "../../providers/Cart";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";
import Button from "../Button";

const MenuDesktop = ({ setInputValue, needInput }) => {
  const history = useHistory();
  const { user, logout, getUserInfo } = useAuth();
  const { cart } = useCart();
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <S.Container>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="build-your-pc">Monte Seu PC</Link>
          </li>
          <li>
            <Link to="profile">Meu Perfil</Link>
          </li>

          <li>
            <Link to="wallet">Carteira</Link>
          </li>
          <li>
            <Link to="aboutUs">Sobre Nós</Link>
          </li>
          <li onClick={() => logout(history)}>Sair</li>
        </ul>
      </nav>
      <div>
        {needInput && (
          <input
            placeholder="Pesquisar"
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}

        {user?.type === "client" && (
          <Button width="80px" onClick={() => history.push("/cart")}>
            <CartIcon size={25} />
            {cart.length}
          </Button>
        )}
      </div>
    </S.Container>
  );
};
export default MenuDesktop;
