const FourthtemGrid = () => {
  return (
    <div className="bg-yellow-500 rounded-md py-6 flex flex-col justify-center items-center gap-8 text-3xl h-full">
      <ContentText />
      <ContentImage />
    </div>
  );
};

const ContentText = () => (
  <div className="flex flex-col leading-7">
    <div className="text-start leading-7 font-dm-medium text-black px-6">
      Write your content using AI.
    </div>
  </div>
);

const ContentImage = () => (
  <div className="w-full pl-6 pr-2">
    <img src="/images/illustration-ai-content.webp" alt="AI" />
  </div>
);

export default FourthtemGrid;
