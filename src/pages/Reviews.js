import React from "react";
import "./Reviews.css";

// Import images (replace with actual image paths)
import john from "../../src/images/Reviewsimg/john.jpeg";
import jane from "../../src/images/Reviewsimg/ones.jpeg";
import mark from "../../src/images/Reviewsimg/jack.jpeg";
import james from "../../src/images/Reviewsimg/james.jpeg";
import josh from "../../src/images/Reviewsimg/josh.jpeg";
import raju from "../../src/images/Reviewsimg/raju.jpeg";

function Reviews() {
  const reviewss = [
    {
      id: "1",
      image: john,
      name: "John Doe",
      rating: 5,
      description:
        "We had an unforgettable wedding thanks to this team. The decorations were stunning, and everything was perfectly organized. Highly recommend!",
      date: "October 10, 2024",
    },
    {
      id: "2",
      image: jane,
      name: "Jane Smith",
      rating: 4.5,
      description:
        "Amazing experience! The floral arrangements were exactly what I envisioned. The staff was super friendly and professional.",
      date: "September 15, 2024",
    },
    {
      id: "3",
      image: mark,
      name: "Mark Lee",
      rating: 4,
      description:
        "The stage decor for our reception was absolutely breathtaking. The team was very attentive to our needs. The only downside was the delay in the catering.",
      date: "August 5, 2024",
    },
    {
      id: "4",
      image: james,
      name: "James Brown",
      rating: 5,
      description:
        "Our wedding was everything we dreamed of, thanks to this amazing team. The decorations and coordination were flawless. Highly recommend!",
      date: "July 12, 2024",
    },
    {
      id: "5",
      image: josh,
      name: "Josh Clark",
      rating: 4,
      description:
        "The team did a great job organizing our big day. The flowers and theme setup were perfect. Could have been better with time management.",
      date: "June 30, 2024",
    },
    {
      id: "6",
      image: raju,
      name: "Raju Patel",
      rating: 4,
      description:
        "The event was well organized, and the stage decor was lovely. However, there was a slight delay in serving dinner. Overall, great experience!",
      date: "May 22, 2024",
    },
  ];

  return (
    <div className="reviews-container">
      <h4>𝓤𝓼𝓮𝓻 𝓡𝓮𝓿𝓲𝓮𝔀𝓼</h4>
      <div className="reviews-gallery">
        {reviewss.map((review) => (
          <div className="reviews-item" key={review.id}>
            <div className="image-container">
              <img src={review.image} alt={`Review by ${review.name}`} />
            </div>
            <div className="reviews-details">
              <h3>{review.name}</h3>
              <p>
                <strong>Rating:</strong> {review.rating} / 5
              </p>
              <p>{review.description}</p>
              <p>
                <em>{review.date}</em>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
