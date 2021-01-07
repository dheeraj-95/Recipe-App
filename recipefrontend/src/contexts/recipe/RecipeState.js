import React, { useReducer } from 'react'
import axios from 'axios'
import { RecipeContext } from './RecipeContext.js'
import { RecipeReducer } from './RecipeReducer.js'

const url = 'https://online-recipee-app.herokuapp.com/recipes/';
// const url = 'http://localhost:8000/recipes/';


export const RecipeState = ({ children }) => {
  const [state, dispatch] = useReducer(RecipeReducer, { 
    recipes: [], 
    recipeById: {}, 
    loading: false 
  })

  const showLoader = () => dispatch({ type: 'SHOW_LOADER' })

  const getRecipes = async () => {
    showLoader()

    try {
      const { data } = await axios.get(url)
      // console.log(data);
      // console.log('Here')
      dispatch({ type: 'GET_RECIPES', payload: data })
    } catch (e) {
      console.log(e.message)
    }
  }

  const getRecipe = async id => {
    showLoader()

    try {
      const { data } = await axios.get(url + id)

      if (data) {
        dispatch({ type: 'GET_RECIPE', payload: data })
      }
    } catch (e) {
      throw new Error(e.message)
    }
  }

  const createRecipe = async body => {
    try {
      const { data } = await axios.post(url, { body })
      dispatch({ type: 'CREATE_RECIPE', payload: data })
    } catch (e) {
      throw new Error(e.message)
    }
  }

  const deleteRecipe = async id => {
    try {
      await axios.delete(url + id)
      const data = state.recipes.filter(recipe => recipe._id !== id)

      dispatch({ type: 'DELETE_RECIPE', payload: data })
    } catch (e) {
      throw new Error(e.message)
    }
  }

  const editRecipe = async body => {
    try {
      await axios.put(url + body._id, body)
      const data = state.recipes.map(recipe => recipe._id === body._id ? body : recipe)

      dispatch({ type: 'EDIT_RECIPE', payload: data })
    } catch (e) { 
      throw new Error(e.message)
    }
  }

  return (
    <RecipeContext.Provider value={{
      getRecipes, 
      getRecipe, 
      createRecipe, 
      deleteRecipe,
      editRecipe,
      ...state
    }}>
      {children}
    </RecipeContext.Provider>
  )
}