const SecondItemGrid = () => {
  return (
    <div className="bg-purple-500 rounded-md">
      <div className="flex gap-1">
        <span className="text-white">Social Media</span>
        <span className="text-yellow-500">10X</span>
        <span className="text-white italic">Faster</span>
        <span className="text-white">with AI</span>
      </div>
      <img
        src="../../public/images/illustration-five-stars.webp"
        alt="Grow Together Illustration"
      />
      <div className="text-white">Over 4,000 5-star reviews</div>
    </div>
  );
};

export default SecondItemGrid;
