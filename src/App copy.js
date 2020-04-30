// import React, { useEffect, useState } from 'react'
// import './App.css'
// import CurrencyRow from './Components/CurrencyRow'

// const BASE_URL = 'https://api.exchangeratesapi.io/latest'

// const App = () => {
//    const [currencyOptions, setCurrencyOptions] = useState([])
//    const [exchnageRate, setExchangeRate] = useState()
//    const [fromCurrency, setFromCurrency] = useState()
//    const [toCurrency, setToCurrency] = useState()
//    const [amount, setAmount] = useState(1)
//    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

//    let fromAmount, toAmount
//    if (amountInFromCurrency) {
//       fromAmount = amount
//       toAmount = amount * exchnageRate
//    } else {
//       fromAmount = amount / exchnageRate
//       toAmount = amount
//    }

//    useEffect(() => {
//       fetch(BASE_URL)
//          .then((res) => res.json())
//          .then((data) => {
//             const firstCurrency = Object.keys(data.rates)[0]

//             setFromCurrency(data.base)
//             setToCurrency(firstCurrency)

//             setCurrencyOptions([data.base, ...Object.keys(data.rates)])
//             setExchangeRate(data.rates[firstCurrency])

//             console.log(fromCurrency, toCurrency)
//             console.log(data)
//          })
//    }, [])

//    useEffect(() => {
//       if (fromCurrency != null && toCurrency != null) {
//          console.log('In useEffect2')
//          console.log(BASE_URL + '/' + `base=${fromCurrency}`)

//          if (fromCurrency === toCurrency) {
//             setExchangeRate(1)
//          } else {
//             fetch(BASE_URL + '?' + `base=${fromCurrency}`)
//                .then((res) => {
//                   console.log(res)
//                   return res.json()
//                })
//                .then((data) => {
//                   console.log(data)
//                   console.log(`Exchnage Rate: ${data.rates[toCurrency]}`)
//                   setExchangeRate(data.rates[toCurrency])
//                })
//          }
//       }
//    }, [fromCurrency, toCurrency])

//    const handleFromAmountChange = (e) => {
//       setAmount(e.target.value)
//       setAmountInFromCurrency(true)
//    }

//    const handleToAmountChange = (e) => {
//       setAmount(e.target.value)
//       setAmountInFromCurrency(false)
//    }

//    const swapCurrencies = () => {
//       const currency = fromCurrency
//       setFromCurrency(toCurrency)
//       setToCurrency(currency)
//    }

//    return (
//       <div>
//          <h1>Convert</h1>
//          <CurrencyRow
//             currencyOptions={currencyOptions}
//             selectedCurrency={fromCurrency}
//             onChangeCurrency={(e) => setFromCurrency(e.target.value)}
//             onChangeAmount={handleFromAmountChange}
//             amount={fromAmount}
//          />
//          <div className='equals'>=</div>
//          <button onClick={swapCurrencies}>Swap</button>
//          <CurrencyRow
//             currencyOptions={currencyOptions}
//             selectedCurrency={toCurrency}
//             onChangeCurrency={(e) => setToCurrency(e.target.value)}
//             onChangeAmount={handleToAmountChange}
//             amount={toAmount}
//          />
//       </div>
//    )
// }

// export default App
