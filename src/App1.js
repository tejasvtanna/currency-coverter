// import React, { useEffect, useState } from 'react'
// import './App.css'
// import CurrencyRow from './Components/CurrencyRow'

// // function App() {
// //   return (
// //     <div className="App">
// //         <h1>Hello React</h1>
// //     </div>
// //   );
// // }

// const BASE_URL = 'https://api.exchangeratesapi.io/latest'

// const App = () => {
//    const [fromCurrency, setFromCurrency] = useState()
//    const [toCurrency, setToCurrency] = useState()
//    const [currencyOptions, setCurrencyOptions] = useState([])

//    useEffect(() => {
//       fetch(BASE_URL)
//          .then(res => res.json())
//          .then(data => {
//             const firstCurrency = Object.keys(data.rates)[0]

// 			setFromCurrency(data.base)
//             setToCurrency(firstCurrency)

//             setCurrencyOptions([data.base, ...Object.keys(data.rates)])
//             // console.log(fromCurrency, toCurrency)
//             // console.log(data)
//          })
//    }, [])

//    return (
//       <div>
//          <h1>{fromCurrency} - {toCurrency}</h1>
//       </div>
//    )
// }

// export default App
