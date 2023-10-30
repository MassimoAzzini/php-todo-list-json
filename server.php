<?php

$json_string = file_get_contents('todo-list.json');

$list = json_decode($json_string,true);

header('Content-Type: application/json');


if(isset($_POST['taskObj'])){
  $newItem = $_POST['taskObj'];

  $list[] = [
    'title' => $newItem,
    'isDone' => false
  ];
  
  file_put_contents('todo-list.json', json_encode($list));
}


echo json_encode($list);


