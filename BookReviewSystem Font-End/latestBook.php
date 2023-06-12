<?php
include_once('../neon/controller/bookController.php');
$book_controller = new bookController();
$book_list = $book_controller->getAllBooks();

// Encode the array as JSON
$json_data = json_encode($book_list);

// Set the content type to JSON
header('Content-Type: application/json');

// Return the JSON data
echo $json_data;
?>