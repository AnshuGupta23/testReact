import PromotionCard from "./PromotionCard";

const promotions = [
  { id: 1, title: "Promo 1", description: "This is promotion 1" },
  { id: 2, title: "Promo 2", description: "This is promotion 2" },
  { id: 3, title: "Promo 3", description: "This is promotion 3" },
  { id: 4, title: "Promo 4", description: "This is promotion 4" },
  { id: 5, title: "Promo 5", description: "This is promotion 5" },
];

const Promotion = () => {
  return (
    <div className="h-[70vh] border-2 py-10 overflow-y-auto flex gap-4 snap-x snap-mandatory scrollbar-hide">
      {promotions.map((promo) => (
        <div key={promo.id} className="shrink-0 w-[60%] snap-center">
          <PromotionCard title={promo.title} description={promo.description} />
        </div>
      ))}
    </div>
  );
};

export default Promotion;
