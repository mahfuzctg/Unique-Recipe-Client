import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaRegThumbsUp } from "react-icons/fa";
import Recipes from "../../../Recipes";
const Details = () => {
  const { id } = useParams();
  const details = useLoaderData();
  const {
    name,
    image,
    year_of_experience,
    likes,
    chefDescription,
    number_of_recipes,
    recipe,
  } = details;

  return (
    <>
      <Header></Header>
      <div>
        <div className="card bg-gradient-to-b from-blue-700 via-purple-700 to-pink-700 lg:w-7/12 h-full lg:mx-auto my-5 lg:card-side text-white shadow-xl">
          <figure className="w-full ">
            <img src={image} className="w-full h-full" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
              <span className="font-bold">Description:</span> {chefDescription}
            </p>
            <p>
              <span className="font-bold">number_of_recipes:</span>{" "}
              {number_of_recipes}
            </p>
            <p>{year_of_experience}</p>
            <div className="text-info font-medium flex gap-2 ">
              Likes
              {likes}
              <FaRegThumbsUp></FaRegThumbsUp>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-4">
        {recipe.map((recipe) => (
          <Recipes key={recipe.id} recipe={recipe}></Recipes>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Details;
