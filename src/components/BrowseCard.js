const BrowseCard = (props) => {
  return (
    <div
      className="border-2 h-full cursor-pointer rounded-2xl transition-transform duration-300
                hover:-translate-y-1 hover:shadow-lg">
      <div className="p-5">
        <h1>{props.title}</h1>
        <h1>{props.description}</h1>
      </div>
    </div>
  );
};

export default BrowseCard;
