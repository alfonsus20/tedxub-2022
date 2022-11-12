import notFound from "../assets/images/not-found.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center bg-main-1 min-h-screen">
      <Helmet>
        <title>Page Not Found</title>
        <meta name="description" content="Page Not Found" />
      </Helmet>
      <div className="h-full flex justify-center items-center">
        <img className="w-96 h-full" src={notFound} alt="404 Not Found" />
      </div>
      <div className="font-jakarta text-main-2 flex flex-col justify-center items-start">
        <h1 className="text-2xl">Ops...The page you're looking for is not available</h1>
        <h2>We suggest you go to homepage while  we fixing the problem</h2>
        <Link to="/"><button className="bg-main-3 py-2 px-5 text-center rounded-xl mt-5 duration-200 hover:text-main-3 hover:bg-white">Back to Home</button></Link>
      </div>
    </div>
  );
}
 
export default NotFound;