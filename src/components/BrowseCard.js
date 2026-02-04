const BrowseCard = (props) => {
  return (
    <div className="border-2 h-full cursor-pointer rounded-2xl">
      <div className="p-5">
        <h1>{props.title}</h1>
        <h1>{props.description}</h1>
      </div>
    </div>
  );
};

export default BrowseCard;
