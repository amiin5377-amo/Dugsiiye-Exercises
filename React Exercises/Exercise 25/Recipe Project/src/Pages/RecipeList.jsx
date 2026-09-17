import { Link } from 'react-router-dom';




function RecipeList() {
    const recipes = [
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
  }
];
  return (
       <div className="bg-white rounded-lg shadow-md p-10">
        <Link to="/" className="inline-block p-2 mb-4 hover:bg-white transition">
        <p className="text-rose-600">  ← Back to Home</p>
      </Link>
      <h1 className="text-3xl font-bold mb-6">All Recipes</h1>
         <div className="space-y-4">
    {recipes.map(recipe => (
            <div key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`} className="block p-6 mt-4 bg-white border border-black rounded-lg shadow hover:bg-white transition">
                  <h2 className="text-xl font-semibold">{recipe.title}</h2>
                  <p className="text-gray-600">{recipe.description}</p>
                </Link>
            </div>
          ))}
        </div>
        </div>
  );
}
export default RecipeList;