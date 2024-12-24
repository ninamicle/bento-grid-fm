const FirstItemGrid = () => {
  return (
    <>
      <div className="bg-yellow-100 rounded-md">
        <div className="flex gap-1">
          <span className="font-dm-medium text-black">
            Create and schedule content
          </span>
          <span className="font-dm-medium-italic text-purple-500 italic">
            quicker.
          </span>
        </div>
        <img
          src="../../public/images/illustration-create-post.webp"
          alt="Create Post Illustration"
        />
      </div>
    </>
  );
};

export default FirstItemGrid;
