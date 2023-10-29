import { useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from "react-redux"
import { getApiConfiguration } from './store/homeSlice'
function App() {

  const dispatch = useDispatch()
  const { url } = useSelector(state => state.home)

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => dispatch(getApiConfiguration(res)))
  }


  useEffect(() => {
    apiTesting();
  }, [])

  return (
    <>
      <div className="App">{
        url?.total_pages
      }
        App
        publish new branch
      </div>
    </>
  )
}

export default App
