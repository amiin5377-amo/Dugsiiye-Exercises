import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import RecipeDetails from "./Pages/RecipeDetails";
import RecipeList from "./Pages/RecipeList";
import Categories from "./Pages/Categories";
import Home from "./Pages/Home";
import CategoriesRecipe from "./Pages/CategoriesRecipe";
import NotFound from "./Pages/NotFound";
import LoginForm from "./Pages/LoginForm";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "recipes",
        element: (<ProtectedRoute element={<RecipeList/>}/>)
      },
      {
        path: "login",
        element: <LoginForm/>
      },
      {
        path: "recipes/:id",
        element: <RecipeDetails />
      },
      {
        path: "categories",
        element: (<ProtectedRoute element={<Categories/>}/>),
        children: [
          {
            path: ":categoryId",
            element: <CategoriesRecipe />
          }
        ]
      },
     
    ]
  }
]);
export default router;