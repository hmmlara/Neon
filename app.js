// Add event listener to "See More" link
// Add event listener to "See More" link
const seeMoreLinks = document.querySelectorAll('.see-more');

seeMoreLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const bookCard = this.closest('.book-card');
    const description = bookCard.querySelector('.book-description');
    const readReviewLink = bookCard.querySelector('.read-review');

    // Toggle the visibility of the book description
    if (description.style.maxHeight) {
      description.style.maxHeight = null;
      this.textContent = 'See More';
        link.style.display = "inline-block"
      readReviewLink.style.display = 'inline-block';
    } else {
      description.style.maxHeight = description.scrollHeight + 'px';
      this.textContent = 'See Less';
      readReviewLink.style.display = 'none';
    }
  });
});
