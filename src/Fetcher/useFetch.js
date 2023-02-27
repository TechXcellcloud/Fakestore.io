import { useState, useEffect } from 'react'


function useFetch(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
  async function fetechedData() {
    try {
      setIsLoading(true)
      const fetcher = await fetch(url)
      const res = await fetcher.json()
      console.log(res)
      setData(res)

      // fetch('https://fakestoreapi.com/products')
      // .then(res=>res.json())
      // .then(json=>console.log(json))
    } catch (error) {
      console.log(error)
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetechedData()
  }, [])

  return { data, isLoading, error }
}

export default useFetch