import { useRef } from "react";
import BrowseCard from "./BrowseCard";

const promotions = [
  { id: 1, title: "Promo 1", description: "This is promotion 1" },
  { id: 2, title: "Promo 2", description: "This is promotion 2" },
  { id: 3, title: "Promo 3", description: "This is promotion 3" },
  { id: 4, title: "Promo 4", description: "This is promotion 4" },
  { id: 5, title: "Promo 5", description: "This is promotion 5" },
  { id: 10, title: "Promo 1", description: "This is promotion 1" },
  { id: 20, title: "Promo 2", description: "This is promotion 2" },
  { id: 30, title: "Promo 3", description: "This is promotion 3" },
  { id: 40, title: "Promo 4", description: "This is promotion 4" },
  { id: 50, title: "Promo 5", description: "This is promotion 5" },
];

const Browse = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="border-2 py-5 h-60 flex flex-col">
      <div className="flex items-center px-30 border-2 justify-between py-2">
        <h1 className="text-4xl font-bold">Browse</h1>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="px-3 py-1 border rounded-xl hover:bg-gray-100">
            ←
          </button>
          <button
            onClick={scrollRight}
            className="px-3 py-1 border rounded-xl hover:bg-gray-100 ">
            →
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex-1 border-2 px-7 py-2 flex overflow-x-auto gap-4">
        {promotions.map((promo) => (
          <div key={promo.id} className="shrink-0 w-[22%]">
            <BrowseCard title={promo.title} description={promo.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
