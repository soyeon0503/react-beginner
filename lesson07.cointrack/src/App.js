import './App.css';
import {useEffect, useState} from 'react'; 

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then((response) =>response.json())
    .then((json) => {
      setCoins(json); //json data input the coins array
      setLoading(false);
    })
  },[]);
  return(
    <div>
      <h1>The Coins! {loading? "" :`(${coins.length})`}</h1>
      {loading? (<strong>loading...</strong>):
      (<select>
        {coins.map((value)=>
          <option>
            {value.name} ({value.symbol}) : ${value.quotes.USD.price}
          </option>
        )}
      </select>)}
    </div>
  );
}

export default App;
