// import userHook from "../hook/userHook";
import pix from "../assets/I&Dan.jpg"

const HomeScreen = () => {
  // const { data }: any = userHook();
  // return <div>HomeScreen {data?.userName}</div>;
  return(
    <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3grid-cols gap-2">
      {Array.from({length:6}, ()=>(
        <div className=" min-w-[200px] min-h-[300px] rounded-md flex flex-col">
        <img src={pix} alt="" className="shadow-md object-cover w-full h-[300px] rounded-md" />
        <div className="mt-8">
          <div className="flex justify-between">
            <div className="font-bold text-[20px]">Title</div>
            <div className="flex items-center relative w-[120px]">
              <div className="absolute">{"😉".repeat(5)}</div>
              <div className="absolute">{"😊".repeat(4)}</div>
            </div>
          </div>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor tempore, est sint quaerat alias tenetur libero eaque perspiciatis qui doloribus reprehenderit possimus quae officiis minus fugit impedit cum sunt! </div>
        <div className=" flex justify-between mt-8 mb-"></div>
      </div>
      ))}
    </div>
  )
};

export default HomeScreen;
