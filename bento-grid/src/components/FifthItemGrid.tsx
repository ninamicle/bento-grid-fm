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
  <div className="w-[20rem]">
    <img
      className="ml-12"
      src="images/illustration-multiple-platforms.webp"
      alt="Multiple platforms"
    />
  </div>
);

export default FifthItemGrid;
