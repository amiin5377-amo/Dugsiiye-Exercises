import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Link to="/login" className="block p-6 bg-white border border-black rounded-lg shadow hover:bg-white transition">
        <h2 className="text-xl font-semibold">View All Recipes</h2>
        <p className="text-gray-600">Explore our collection of delicious recipes</p>
      </Link>
      <Link to="/login" className="block p-6 bg-white border border-black rounded-lg shadow hover:bg-white transition">
        <h2 className="text-xl font-semibold">Browse Categories</h2>
        <p className="text-gray-600">Find recipes by cuisine or dietary preference</p>
      </Link>
    </div>
  );
}
export default Home;