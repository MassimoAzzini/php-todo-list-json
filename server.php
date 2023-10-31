<?php

$json_string = file_get_contents('todo-list.json');

$list = json_decode($json_string,true);

header('Content-Type: application/json');

// ADD TASK
if(isset($_POST['taskTitle'])){
  $newTitleTask = $_POST['taskTitle'];

  $list[] = [
    'title' => $newTitleTask,
    'isDone' => false
  ];
  
  file_put_contents('todo-list.json', json_encode($list));
};

// REMOVE TASK
if(isset($_POST['taskIndexDelate'])){
  $indexTask = $_POST['taskIndexDelate'];
  array_splice($list,$indexTask,1);

  file_put_contents('todo-list.json', json_encode($list));
}

// TOGGLE isDone TASK
if(isset($_POST['toggleIndexTask'])){
  $indexTaskToggle = $_POST['toggleIndexTask'];
  $list[$indexTaskToggle]['isDone'] = !$list[$indexTaskToggle]['isDone'];

  file_put_contents('todo-list.json', json_encode($list));
}


echo json_encode($list);



