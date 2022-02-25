import React, {useEffect, useState } from 'react'
import './App.css';
import Loader from './Components/Loader';
import QuotesCard from './Components/QuotesCard';
export default function App() {

  const [Quotes,setQuotes] = useState([])
  const [index,setIndex] = useState(0)
  const [loader,setloader] = useState(true)

    const url = "https://animechan.vercel.app/api/quotes"

    const display = Quotes[index]

    async function fetchData(){
      try{
          setloader(true)
          setIndex(0)
          const response = await fetch(url)
          const data = await response.json()
          setQuotes(data)
          setloader(false)
      }catch(e){
        setloader(false)
        console.log(e)
      }
    }

    useEffect(() =>{
        fetchData()
    },[])

    function checkPage(number){
      if(number > Quotes.length -1){
        return 0
      }else if(number < 0){
        return Quotes.length -1
      }else{
        return number
      }
    }

    function nextPage(){
        setIndex(checkPage(index + 1))
    }

    function prevPage(){
      setIndex(checkPage(index - 1 ))
    }

  return loader ? (<Loader />) : (

        <div className="App">
        <QuotesCard
          index = {index}
          length = {Quotes.length}
          {...display}

          nextPage ={nextPage}
          prevPage = {prevPage}
          newQuotes = {fetchData}
        />
        </div>
  )
     
  
 
}
