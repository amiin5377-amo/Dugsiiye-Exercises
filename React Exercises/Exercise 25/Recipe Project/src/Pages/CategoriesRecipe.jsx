import {Link, useParams} from 'react-router-dom'
 const allCategories = [
      {
    id: 1,
    title: 'Classic Chocolate Cake',
    description: 'Rich and moist chocolate cake perfect for any occasion',
    category: 'desserts'
  },
  {
    id: 2,
    title: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy egg sauce',
    category: 'dinner'
  },
  {
    id: 3,
    title: 'Greek Salad',
    description: 'Fresh Mediterranean salad with feta cheese',
    category: 'lunch'
  },
  {
    id: 4,
    title: 'Breakfast Smoothie Bowl',
    description: 'Healthy and colorful breakfast bowl',
    category: 'breakfast'
  },
  {
    id: 5,
    title: 'Tiramisu',
    description: 'Classic Italian coffee-flavored dessert',
    category: 'desserts'
  }
 ]

function CategoriesRecipe() {
  const {categoryId} = useParams()
  const filteredRecipes = allCategories.filter(recipe => recipe.category === categoryId)
  return (
    <div className="bg-white rounded-lg shadow-md p-10">
      <h1 className='text-2xl font-bold text-center'> {categoryId}  Recipes</h1>
      {filteredRecipes.map(recipe => (

        <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`} className="block p-6 mt-4 bg-white border border-black rounded-lg shadow hover:bg-white transition">
          <h2 className="text-xl font-semibold">{recipe.title}</h2>
          <p className="text-gray-600">{recipe.description}</p>
        </Link>
        </div>
      ))}
    </div>
  );
}
export default CategoriesRecipe;