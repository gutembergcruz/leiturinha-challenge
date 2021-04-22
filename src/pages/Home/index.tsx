import React, { useEffect, useState } from 'react';
import { FaWineGlass, FaUtensils, FaPlus, FaCheck, FaTrashAlt } from 'react-icons/fa'
import { Header, Main, Card } from './styles';

import mainLogo from './logo.png';
import Placeholer from './placeholder.jpg'
import PlaceholerDrink from './placeholder-drink.jpg'
//TIPANDO OS VALORES DA RESPOSTA API
interface Prato {
  id: number,
  category: string,
  name: string,
  description: string,
  price: number
}
interface Listas {
  key: number | null,
  name: string | null,
  price: number | null,
  quant: number | null
}

export default function Home() {
  // VARIAVEL ARRAY RESPOSTA API
  const [pratos, setPratos] = useState<Prato[]>([]);
  // VARIAVEL CATEGORIA SELECIONADA
  const [cate, setCate] = useState('food')

  const [list, setList] = useState<Listas[]>([]);
  const [values, setValues] = useState([0])
  const [total, setTotal] = useState(0);

  //CHAMADA API
  useEffect(() => {
    fetch('https://5ff37c3328c3980017b195e8.mockapi.io/api/products')
      .then(response => response.json())
      .then(data => setPratos(data))
  }, [])
  // FUNÇÕES ALTERAR CATEGORIA
  function handleFood(e: any) {
    e.preventDefault();
    setCate('food')
  }
  function handleDrink(e: any) {
    e.preventDefault();
    setCate('drink')
  }

  function handleAddList(id: number, quant: number, ite: string, pri: number) {
    console.log(quant + "-" + ite + "-" + pri)
    const atual = { "key": id, "quant": quant, "name": ite, "price": pri }
    setList([...list, atual])
    setTotal(total + pri)
  }

  function handleClear() {
    setList([]);
    setTotal(0);
  }

  return (
    <>
      <Header>
        <img src={mainLogo} alt="" />
        <nav>
          <a href="" className={cate === "food" ? "selected" : ""} onClick={handleFood}><FaUtensils /> Comidas</a>
          <a href="" className={cate === "drink" ? "selected" : ""} onClick={handleDrink}><FaWineGlass /> Bebidas</a>
        </nav>
      </Header>
      <Main>
        <main>
          {cate === "food" ?
            <h1>O que vamos comer hoje?</h1>
            :
            <h1>O que vamos beber hoje?</h1>}
          {pratos.map(prato => (
            prato.category === cate ?
              < Card >
                <img src={cate === "food" ? Placeholer : PlaceholerDrink} alt="" />
                <div>
                  <h2>{prato.name}</h2>
                  <span>{prato.description}</span>
                  <button onClick={() => handleAddList(prato.id, 1, prato.name, prato.price)}><FaPlus className="ico" /> Adicionar</button>
                  <h3>R$ {prato.price}</h3>
                </div>
              </Card>
              : ""
          ))}
        </main>
        <aside>
          <h2>Carrinho</h2>
          <div className="itens">
            {list.map(lis => (
              <p><span>{lis.quant}</span> - {lis.name} - {lis.price} </p>
            ))}
          </div>
          <div className="linha"></div>
          <div className="total">
            <h3>Total:</h3>
            <h3>R$ {total.toFixed(2)}</h3>
          </div>
          <button><FaCheck /> Finalizar pedido</button>
          <button onClick={handleClear} className="limpar"><FaTrashAlt /> Limpar carrinho</button>
        </aside>
      </Main>
    </>
  )
}