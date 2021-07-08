import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Input from "../../components/Input";

import { useState } from "react";
const HomeClient = () => {
  const [inputValue, setInput] = useState("");

  return (
    <>
      <div>Aqui vai fica o menu e o carrinho e a sinalização dele</div>
      <input value={inputValue} onChange={(e) => setInput(e.target.value)} />
      {inputValue === "" && (
        <>
          <section>
            <h3>Teclados</h3>
            <Slider>
              <div>
                <p>Nome do produto</p>
                <span>Preço</span>
              </div>
            </Slider>
          </section>
          <section>
            <h3>Processador</h3>
            <Slider>
              <div>
                <p>Nome do produto</p>
                <span>Preço</span>
              </div>
            </Slider>
          </section>
          <section>
            <h3>MotherBoard</h3>
            <Slider>
              <div>
                <p>Nome do produto</p>
                <span>Preço</span>
              </div>
            </Slider>
          </section>
        </>
      )}
      {inputValue !== "" && (
        <>
          <section>
            <h3>Produto encontrado</h3>
            <Slider>
              <div>
                <p>Nome do produto</p>
                <span>Preço</span>
              </div>
            </Slider>
          </section>
          <div>Aqui fica o footer</div>
        </>
      )}
    </>
  );
};

export default HomeClient;