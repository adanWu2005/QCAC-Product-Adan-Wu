import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm.jsx';

const SAMPLE_REVIEWS = [
  {
    id: 'sample-1',
    name: 'Alex Chen',
    rating: 5,
    message: 'Absolutely love this keyboard! The build quality is exceptional and the hot-swappable switches make it so easy to customize. The QMK/VIA support is a game-changer for my workflow.',
    isSample: true
  },
  {
    id: 'sample-2',
    name: 'Sarah Johnson',
    rating: 5,
    message: 'Best keyboard I\'ve owned. The wireless connectivity works flawlessly, and I can switch between my Mac and PC seamlessly. The typing feel is perfect - not too loud, not too quiet.',
    isSample: true
  },
  {
    id: 'sample-3',
    name: 'Michael Torres',
    rating: 4,
    message: 'Great keyboard overall. The 65% layout is perfect for my desk setup. Only minor complaint is the battery life could be slightly better, but it\'s still very good.',
    isSample: true
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Load reviews from localStorage
    const storedReviews = localStorage.getItem('keychronK6Reviews');
    const parsedReviews = storedReviews ? JSON.parse(storedReviews) : [];
    
    // Load current user's name
    const storedUserName = localStorage.getItem('currentReviewerName');
    if (storedUserName) {
      setCurrentUser(storedUserName);
    }
    
    // Combine sample reviews with stored reviews
    setReviews([...SAMPLE_REVIEWS, ...parsedReviews]);
  }, []);

  useEffect(() => {
    // Close dialog on Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isDialogOpen) {
        setIsDialogOpen(false);
      }
    };

    if (isDialogOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when dialog is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isDialogOpen]);

  const addReview = (newReview) => {
    const reviewToAdd = {
      ...newReview,
      id: `review-${Date.now()}`,
      isSample: false
    };

    // Get existing stored reviews
    const storedReviews = localStorage.getItem('keychronK6Reviews');
    const parsedReviews = storedReviews ? JSON.parse(storedReviews) : [];
    
    // Add new review
    const updatedReviews = [...parsedReviews, reviewToAdd];
    
    // Save to localStorage
    localStorage.setItem('keychronK6Reviews', JSON.stringify(updatedReviews));
    
    // Update current user
    setCurrentUser(newReview.name.trim());
    
    // Update state to show new review instantly
    setReviews([...SAMPLE_REVIEWS, ...updatedReviews]);
  };

  const deleteReview = (reviewId) => {
    // Only allow deletion of non-sample reviews
    const reviewToDelete = reviews.find(r => r.id === reviewId);
    if (!reviewToDelete || reviewToDelete.isSample) {
      return;
    }

    // Get stored reviews from localStorage
    const storedReviews = localStorage.getItem('keychronK6Reviews');
    const parsedReviews = storedReviews ? JSON.parse(storedReviews) : [];
    
    // Remove the review
    const updatedReviews = parsedReviews.filter(r => r.id !== reviewId);
    
    // Save updated reviews to localStorage
    localStorage.setItem('keychronK6Reviews', JSON.stringify(updatedReviews));
    
    // Update state
    setReviews([...SAMPLE_REVIEWS, ...updatedReviews]);
  };

  const canDeleteReview = (review) => {
    // Can only delete if:
    // 1. It's not a sample review
    // 2. The review belongs to the current user (name matches)
    return !review.isSample && currentUser && review.name.trim().toLowerCase() === currentUser.toLowerCase();
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>
        ★
      </span>
    ));
  };

  return (
    <section className="reviews">
      <div className="container">
        <h2>Customer Reviews</h2>
        
        <ReviewForm onAddReview={addReview} />
        
        <div className="show-reviews-button-container">
          <button 
            className="show-reviews-button"
            onClick={() => setIsDialogOpen(true)}
          >
            Show Reviews
          </button>
        </div>

        {isDialogOpen && (
          <div className="reviews-dialog-overlay" onClick={() => setIsDialogOpen(false)}>
            <div className="reviews-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="reviews-dialog-header">
                <h2>Customer Reviews</h2>
                <button 
                  className="close-dialog-button"
                  onClick={() => setIsDialogOpen(false)}
                  aria-label="Close dialog"
                >
                  ×
                </button>
              </div>
              <div className="reviews-dialog-content">
                <div className="reviews-list">
                  {reviews.length === 0 ? (
                    <p className="no-reviews">No reviews yet. Be the first to review!</p>
                  ) : (
                    reviews.map((review) => (
                      <div key={review.id} className="review-card">
                        <div className="review-header">
                          <h3 className="reviewer-name">{review.name}</h3>
                          <div className="review-rating">
                            {renderStars(review.rating)}
                            <span className="rating-number">({review.rating}/5)</span>
                          </div>
                        </div>
                        <p className="review-message">{review.message}</p>
                        {canDeleteReview(review) && (
                          <button 
                            className="delete-review-button"
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete your review?')) {
                                deleteReview(review.id);
                              }
                            }}
                            aria-label="Delete review"
                          >
                            Delete Review
                          </button>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

