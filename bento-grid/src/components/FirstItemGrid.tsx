const FirstItemGrid = () => {
  return (
    <div className="bg-yellow-100 rounded-md px-6 h-full flex justify-center text-start items-center text-3xl">
      <div>
        <ContentText />
        <ContentImage />
      </div>
    </div>
  );
};

const ContentText = () => (
  <div className="flex flex-col leading-7">
    <span className="font-dm-medium text-black">
      Create and schedule content
    </span>
    <span className="font-dm-medium-italic text-purple-500 italic">
      quicker.
    </span>
  </div>
);

const ContentImage = () => (
  <div className="w-[70%] mt-3">
    <img
      src="../../public/images/illustration-create-post.webp"
      alt="Create Post Illustration"
    />
  </div>
);

export default FirstItemGrid;
