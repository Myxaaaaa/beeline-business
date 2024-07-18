import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ErrorElement = () => {
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl)
        setData(response.data)
      } catch (err) {
        if (err.response) {
          if (err.response.status >= 400) {
            setError('Error 404: Resource not found')
          } else if (err.response.status >= 500) {
            setError('Error 500: Internal server error')
          } else {
            setError(`Error ${err.response.status}: ${err.response.statusText}`)
          }
        } else {
          setError('Error')
        }
      }
    }

    fetchData()
  }, [])

  if (error) {
    return <div style={{color: 'white', fontSize: 20}}>{error}</div>
  }

  return (
    <div>
      {data ? (
        <div>Data: {JSON.stringify(data)}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default ErrorElement
