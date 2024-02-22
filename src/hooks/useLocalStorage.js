import { useEffect, useState } from 'react'

/*
 ** ** == ==================================================
 ** ** ** Hook [useLocalStorage]
 ** ** == ==================================================
 */
const useLocalStorage = () => {
  /*
   ** **
   ** ** ** State
   ** **
   */
  const [storedItems, setStoredItems] = useState({})

  /*
   ** **
   ** ** ** useEffect hook to sync local storage on initial render
   ** **
   */
  useEffect(() => {
    syncLocalStorage()
  }, [])

  /*
   ** **
   ** ** ** Sync local storage values to this state
   ** **
   */
  const syncLocalStorage = () => {
    const values = { ...window.localStorage }
    setStoredItems(values)
  }

  /*
   ** **
   ** ** ** Add item in the local storage
   ** **
   */
  const addItem = (key, value) => {
    window.localStorage.setItem(key, value)
    syncLocalStorage()
  }

  /*
   ** **
   ** ** ** Remove item from the local storage
   ** **
   */
  const removeItem = (key) => {
    window.localStorage.removeItem(key)
    syncLocalStorage()
  }

  return { storedItems, addItem, removeItem }
}

export default useLocalStorage
