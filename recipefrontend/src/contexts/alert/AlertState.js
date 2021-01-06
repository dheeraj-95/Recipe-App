import React, { useReducer } from 'react'
import { AlertContext } from './AlertContext'
import { AlertReducer } from './AlertReducer'

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, { show: false, text: '', type: '' })

  const showAlert = (text = '', type = 'success') => {
    dispatch({ type: 'SHOW_ALERT', payload: { text, type } })
  }

  const hideAlert = () => dispatch({ type: 'HIDE_ALERT' })

  return (
    <AlertContext.Provider value={{
      showAlert, hideAlert,
      ...state
    }}>
      {children}
    </AlertContext.Provider>
  )
}
