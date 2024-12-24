const ThirdItemGrid = () => {
  return (
    <div className="bg-purple-100 rounded-md flex flex-col items-center h-full py-8">
      <div className="flex flex-col gap-2 pl-6">
        <div className="text-2xl text-start leading-6 pl-2">
          Schedule to social media.
        </div>
        <div className="overflow-hidden">
          <img
            className="ml-2 h-full"
            src="images/illustration-schedule-posts.webp"
            alt="Schedule posts"
          />
        </div>
        <div className="pl-2 text-start text-md leading-4">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </div>
      </div>
    </div>
  );
};

export default ThirdItemGrid;
