import formatValue from "../../utils/formatValue";
import DefaultImage from "../../assets/default.jpg";

import * as S from "./styles";

interface Feedback {
  user: string;
  rating: number;
  comment?: string;
  likes?: number;
}

interface ProductProps {
  name: string;
  price: number;
  category?: string;
  id?: number;
  url: string;
  quantity?: number;
  sellerId?: number;
  feedback?: Feedback[];
  userType: string;
}

const Product = ({ name, url, price, quantity, userType }: ProductProps) => {
  return (
    <S.Container>
      <img src={url || DefaultImage} alt={name} />
      <h3>{name}</h3>
      {userType === "seller" ? (
        <S.SellerPrice>
          <label>{formatValue(price)}</label>
          <p>Quantidade vendida: {quantity}</p>
        </S.SellerPrice>
      ) : (
        <S.ClientPrice>
          <p>
            <label>À vista</label>
            {formatValue(price)}
          </p>
          <h6>ou 12x sem juros de {formatValue(price / 12)}</h6>
        </S.ClientPrice>
      )}
    </S.Container>
  );
};

export default Product;
