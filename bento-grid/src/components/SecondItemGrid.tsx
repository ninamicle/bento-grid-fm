const SecondItemGrid = () => {
  return (
    <div className="bg-purple-500 rounded-md flex flex-col items-center justify-center h-full">
      <div>
        <div className="text-5xl text-white mb-4">
          Social Media
          <span className="text-yellow-500">10X</span>{" "}
          <span className="italic pr-3"> Faster</span>
          with AI
        </div>
        <ContentImage />
        <div className="text-white">Over 4,000 5-star reviews</div>
      </div>
    </div>
  );
};

const ContentImage = () => (
  <div className="flex justify-center items-center w-full mb-2">
    <img
      className="h-6"
      src="../../public/images/illustration-five-stars.webp"
      alt="Grow Together Illustration"
    />
  </div>
);

export default SecondItemGrid;
