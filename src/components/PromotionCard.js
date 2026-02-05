const PromotionCard = (props) => {
  return (
    <div className="border-2 h-full cursor-pointer rounded-4xl">
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
  );
};

export default PromotionCard;
