<?php

//CROSエラーの解消
header("Access-Control-Allow-Origin: *");
//JSON形式で返却すること、文字形式がUTF-8だということの宣言
header('Content-Type: application/json; charset=UTF-8');

//DAOの読み込み
require_once './UserDAO.php';

//ログイン処理

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


//arrayの中身をJSON形式に変換している
$json_array = json_encode($data);

print $json_array;
// const create_account = async () => {
//     try {
//       const response = await axios.post(
//         'http://mp-class.chips.jp/matiawase/main.php',
//         'https://mp-class.chips.jp/matiawase/main.php',
//         {
//           create_user: '',
//           name: name,
// @@ -27,15 +27,12 @@ function Card() {
//           },
//         }
//       );
//       // console.log(response.data)
//       if(response.data.create_acount === true) {
//         localStorage.setItem('user_id', response.data.user_information.user_id)
//         // console.log(localStorage.getItem('user_id'))
//         seterror(false)
//         location.href = '/map'
//       } else {
//         seterror(true)
//         // console.log(response.data)
//       }
//     } catch(error) {
//       console.log(error)