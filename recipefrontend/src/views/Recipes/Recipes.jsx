import React, { useState, useEffect, useContext } from 'react'
import { RecipeContext } from '../../contexts/recipe/RecipeContext'
// import { LoadingSpinner } from '../../Components'
import { RecipeCard } from '../../Components'
import { Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

const Recipes = () => {
//   const [search, setSearch] = useState({ input: "", category: "" })
  const [recipeList, setRecipeList] = useState([])
  const { recipes, loading, getRecipes } = useContext(RecipeContext)
  const classes = useStyles();
//   const searchChange = e => {
//     const { name, value } = e.target

//     setSearch({ ...search, [name]: value })
//   }

  useEffect(() => {
    getRecipes()
  },[]);

  useEffect(() => {
    setRecipeList(recipes);
    // console.log(recipeList);
  }, [recipes])

//   useEffect(() => {
//     const filtered = recipes.filter(({ title, category }) => {
//       return title.toLowerCase().includes(search.input.toLowerCase())
//         && category.includes(search.category)
//     })

//     setRecipeList(filtered)
//   }, [search])
  return (
    
    <>
      
      {/* <SearchBar 
        search={search} 
        searchChange={searchChange}
      /> */}
      {/* {loading 
        ? <LoadingSpinner />
        : <div className={styles.recipes}>
            {recipeList && recipeList.map(recipe =>
              <Grid key={recipe._id}>
                <RecipeCard  recipe={recipe} />
              </Grid> 
            )}
          </div>
      } */}
      <Container fixed>
      {/* <div className={styles.recipes}> */}
      <Grid 
            container
            spacing={4}
            className={classes.gridContainer}
            justify="center"

          >
        {recipeList.map(recipe =>
            <Grid key={recipe._id} item xs={12} sm={6} md={4}>      
            {/* <Link to={`/recipes/${recipe._id}`}> */}
              <RecipeCard recipe={recipe} />
            {/* </Link> */}
            </Grid>
        )}
      </Grid>
      {/* </div> */}
     </Container>
    </>
    
  )
}

export default Recipes