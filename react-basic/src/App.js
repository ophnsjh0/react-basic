import {useState,  useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [coinValue, setCoinValue] = useState(0);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => 
      setCoins(json),
      setLoading(false)
    )
  }, [])
   const onChange = (event) => {
    setMoney(event.target.value);
   }
   const onChangeCoin = (event) => {
    setCoinValue(event.target.value);
    console.log(event.target.value);
   }
    
  return(
    <div>
      <h1>Coins Data : {loading ? null : coins.length} </h1>
      {loading ? <strong>loading....</strong> : null}
      <strong> Money : </strong>
      $ <input value={money} placeholder="your Money plz.." type="number" onChange={onChange} ></input> USD
      <div>
        <select onChange={onChangeCoin}>
          {coins.map((coin, id) => 
          <option key={id} value={coin.quotes.USD.price}>
            {coin.id}({coin.symbol}) : $ {coin.quotes.USD.price} USD
          </option>)         
          }
        </select>

        <h3>  You can buy: {Math.floor(money/coinValue)} </h3>
         

        
      </div>
      
     
    </div>
  )
}

export default App;
