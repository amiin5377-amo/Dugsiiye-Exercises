import { Link, useParams} from 'react-router-dom';




function RecipeDetails() {
    const { id } = useParams();
     const recipe = {
    id,
    title: 'Sample Recipe',
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-10">
<Link to="/recipes" className="inline-block p-2 mb-4      hover:bg-white transition">
        <p className="text-rose-600">  ← Back to Recipes</p>
      </Link>

      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Ingredients:</h2>
        <ul className="list-disc pl-5">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Instructions:</h2>
        <ol className="list-decimal pl-5">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default RecipeDetails;