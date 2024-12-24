const FifthItemGrid = () => {
  return (
    <div className="bg-white rounded-md text-2xl h-full flex flex-col items-center gap-y-5 justify-center overflow-hidden">
      <ContentImage />
      <div className="text-start leading-6 font-dm-medium text-black px-4">
        Manage multiple accounts and platforms.
      </div>
    </div>
  );
};

const ContentImage = () => (
  <div className="w-64 pl-1">
    <img
      className="ml-10"
      src="images/illustration-multiple-platforms.webp"
      alt="Multiple platforms"
    />
  </div>
);

export default FifthItemGrid;
