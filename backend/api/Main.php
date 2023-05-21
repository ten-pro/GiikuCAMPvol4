<?php

//CROSエラーの解消
header("Access-Control-Allow-Origin: *");
//JSON形式で返却すること、文字形式がUTF-8だということの宣言
header('Content-Type: application/json; charset=UTF-8');

//DAOの読み込み
require_once './UserDAO.php';
require_once './GptDAO.php';
require_once './DebateDAO.php';

$data = '引数が存在しません';

//login_userの引数がある時の処理
if (isset($_POST['login_user']) == true) {
    $class = new Login();
    $data = $class->login_user($_POST['mail'], $_POST['pass']);
}

//create_userの引数がある時の処理
if (isset($_POST['create_user']) == true) {
    $class = new Login();
    $data = $class->create_user($_POST['pass'], $_POST['mail']);
}

$json_data = json_decode(file_get_contents('php://input'), true);

//create_gptの引数がある時の処理
if (isset($json_data['create_gpt']) && !empty($json_data['gpts'])) {
    $class = new Gpt();
    $data = $class->create_gpt($json_data['gpts']);
}

//create_talkの引数がある時の処理
if (isset($json_data['create_talk']) && !empty($json_data['talks'])) {
    $class = new Debate();
    $data = $class->create_talk($json_data['talks']);
}

//create_debateの引数がある時の処理
if (isset($json_data['create_debate']) && !empty($json_data['gpts']) && !empty($json_data['debate'])) {
    $class1 = new Gpt();
    $class2 = new Debate();
    $data =
        array(
            'gpts_id' => $class1->create_gpt($json_data['gpts']),
            'debate_id' => $class2->create_debate($json_data['debate'])
        );
}

//get_gptlistの引数がある時の処理
if (isset($_POST['get_gptlist']) == true) {
    $class = new Gpt();
    $data = $class->get_gptlist($_POST['id']);
}

//search_gptの引数がある時の処理
if (isset($_POST['search_gpt']) == true) {
    $class = new Gpt();
    $data = $class->search_gpt($_POST['character']);
}

//get_minutesの引数がある時の処理
if (isset($_POST['get_minutes']) == true) {
    $class = new Debate();
    $data = $class->get_minutes($_POST['user_id']);
}

//get_talklistの引数がある時の処理
if (isset($_POST['get_talklist']) == true) {
    $class = new Debate();
    $data = $class->get_talklist($_POST['debate_id']);
}

//get_debate_infoの引数がある時の処理
if (isset($_POST['get_debate_info']) == true) {
    $class = new Debate();
    $data = $class->get_debate_info($_POST['debate_id']);
}


//arrayの中身をJSON形式に変換している
$json_array = json_encode($data);

print $json_array;
