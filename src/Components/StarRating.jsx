const StarRating = ({ rating, count }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>);
    }

    if (halfStars === 1) {
      stars.push(<i key="half" className="fa fa-star-half-o" aria-hidden="true"></i>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={i + fullStars + halfStars} className="fa fa-star-o" aria-hidden="true"></i>);
    }

    return stars;
  };

  return (
    <div className="star-rating">
      {renderStars()} {rating} ({count})
    </div>
  );
};

export default StarRating;
