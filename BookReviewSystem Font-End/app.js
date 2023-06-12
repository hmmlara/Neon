
// Add event listener to "See More" link
const seeMoreLinks = document.querySelectorAll('.read-more-btn');

seeMoreLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const bookCard = this.closest('.book-card');
    const description = bookCard.querySelector('.book-description');
    const readReviewLink = bookCard.querySelector('.read-review');

    // Toggle the visibility of the book description
    if (description.style.maxHeight) {
      description.style.maxHeight = null;
      this.textContent = '...See More';
    //   readReviewLink.style.display = 'inline-block';
    } else {
      description.style.maxHeight = description.scrollHeight + 'px';
      this.textContent = '...See Less';
    //   readReviewLink.style.display = 'none';
    }
  });
});

//Rating Function
const stars = document.querySelectorAll('.star');
let rating = 0;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    rating = index + 1;
    highlightStars(rating);
  });

  star.addEventListener('mouseover', () => {
    highlightStars(index + 1);
  });

  star.addEventListener('mouseout', () => {
    highlightStars(rating);
  });
});

function highlightStars(num) {
  stars.forEach((star, index) => {
    if (index < num) {
      star.style.backgroundImage = 'url(star-icon-filled.png)';
    } else {
      star.style.backgroundImage = 'url(star-icon.png)';
    }
  });
}

