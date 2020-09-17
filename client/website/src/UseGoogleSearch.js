import {useState, useEffect} from 'react'
import API_KEY from './key'

const CONTEXT_KEY = 'd7be352a206dd60f7'

export const UseGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
            })
            .catch(err => {
                console.log(err)
            })
        }
        fetchData()
    }, [term])

    return { data }
}