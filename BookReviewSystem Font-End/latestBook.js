$(document).ready(function() {
    $.ajax({
        method: 'post',
        url: 'latestBook.php',
        success: function(response) {
            console.log(response);
            var data = JSON.parse(response);
            console.log(data);
            
            // Use the data retrieved from the PHP script here
            for (var i = 0; i < data.length; i++) {
                var bookId = data[i]['id'];
                var bookName = data[i]['name'];
                var bookImage = data[i]['image'];
                var bookPdfFile = data[i]['pdf_file'];
                var bookCategory = data[i]['category_name'];
                var bookAuthor = data[i]['auther_name'];
                
                console.log("Book ID: " + bookId);
                console.log("Book Name: " + bookName);
                console.log("Book Image: " + bookImage);
                console.log("Book PDF File: " + bookPdfFile);
                console.log("Book Category: " + bookCategory);
                console.log("Book Author: " + bookAuthor);
            }
        }
    });
});