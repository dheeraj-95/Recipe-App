import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { LoadingSpinner } from '../../Components'
import IconButton from '@material-ui/core/IconButton';
import { RecipeContext } from '../../contexts/recipe/RecipeContext'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import styles from './Recipe.module.css'

const Recipe = () => {
  const { recipeById, loading, getRecipe, deleteRecipe } = useContext(RecipeContext)
  const { id } = useParams()
  const history = useHistory()
  // console.log(useParams())

  useEffect(() => {
    getRecipe(id);
  }, [])

  const handleDelete = () => {
    deleteRecipe(id)
    history.push('/recipes')
  }
  const handleEdit = () => {
    history.push(`${history.location.pathname}/edit`)
  }

  return (
    <>
      {loading
        ? <LoadingSpinner />
        : <> 
            {recipeById
              ? <div>
                  <h2 className="title">{recipeById.title}</h2>
                  <ul className={styles.buttons}>
                    <li onClick={handleDelete}>
                      <IconButton aria-label="settings" >
                        <DeleteIcon style={{ color: 'red' }} />
                      </IconButton>
                      <span>Delete</span>
                    </li>
                    <li onClick={handleEdit}>
                    <IconButton aria-label="settings" >
                        <EditIcon style={{ color: 'blue' }} />
                      </IconButton>
                      <span>Edit</span>  
                    </li>
                  </ul> 
                  <div className={styles.recipe}>
                    <div>
                      <h6>DESCRIPTION</h6>
                      <p>{recipeById.description}</p>

                      <h6>COOKING INSTRUCTIONS</h6>
                      <p>{recipeById.instruction}</p>
                    </div>

                    <div>
                      <h6>TIME FOR PREPARING</h6>
                      <p>{recipeById.time}</p>

                      <h6>SERVINGS</h6>
                      <p>{recipeById.portion}</p>

                      <h6>INGREDIENTS</h6>
                      <ul className={styles.ingredients}>
                        {recipeById.ingredients && 
                          recipeById.ingredients.split(',').map((item, index) =>
                            <li key={index}>{item.trim()}</li>
                          )
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              : <h3 className={styles.notFound}>No recipe found</h3>
            }
          </>
      }
    </>
  )
}

export default Recipe

