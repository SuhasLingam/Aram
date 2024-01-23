import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function DeedCard() {
  //   const [isLiked, setIsLiked] = useState(false);

  //   const handleSubmit = () => {
  //     setIsLiked((prev) => !prev);
  //   };

  return (
    <div className="bg-white m-5 rounded-lg border-2 border-[#99ff53] shadow-[0_50px_25px_-24px_rgb(153, 255, 83,0.3)]">
      <div className="h-[220px] p-2 flex">
        <div className="w-[380px] bg-black"></div>
        <div className="text-center flex flex-col justify-center items-center p-3">
          <p className="font-Inter text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            eligendi ex sequi?
          </p>
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          {/* <div className="flex m-4">
            <p>Likes: </p>{" "}
            <button className="mx-2" onClick={handleSubmit}>
              {isLiked ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DeedCard;
