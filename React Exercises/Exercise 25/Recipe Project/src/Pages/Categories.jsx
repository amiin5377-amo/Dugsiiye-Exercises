import {Link, Outlet} from 'react-router-dom'

const categories = [
      {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day right'
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: 'Midday favorites'
  },
  {
    id: 'dinner',
    name: 'Dinner',
    description: 'Evening meals'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats'
  }
]

function Categories() {
  return (
    <div className="grid md:grid-cols-1 gap-6">
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <div  className ="bg-white rounded-lg shadow-md p-6" >
<div className= "space-y-4">   
   {categories.map(category => (
                <Link key={category.id} to={`/categories/${category.id}`} className="block p-4 bg-white rounded-lg shadow hover:bg-rose-600 transition">
                    <h2 className="text-xl font-semibold">{category.name}</h2>
                    <p className="text-gray-600">{category.description}</p>
                </Link>
            ))}


</div>
         

        </div>
        <div>
<Outlet />
        </div>
        
    </div>
  );
}

export default Categories;