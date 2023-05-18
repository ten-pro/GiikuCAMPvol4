<?php

class Login
{

    function get_pdo()
    {
        $pdo = new PDO('mysql:host=mysql213.phy.lolipop.lan;dbname=LAA1418138-aidebate;charset=utf8', 'LAA1418138', 'apstdnb');
        return $pdo;
    }

    function login_user($mail, $pass)
    {
        try {

            if(empty($pass) || empty($mail))
            return 'nodata';

            $pdo = $this->get_pdo();

            // ユーザー名に一致するユーザーを取得する
            $sql = "SELECT * FROM user_tbl WHERE user_mail = ?";
            $ps = $pdo->prepare($sql);
            $ps->bindValue(1, $mail, PDO::PARAM_STR);
            $ps->execute();
            $search = $ps->fetchAll();

            // ユーザーが存在しない場合はログイン失敗とする
            if (!$search) {
                return array('login' => false, 'result' => 'mail mismatch');
            }

            foreach ($search as $row) {
                // パスワードの照合
                if (password_verify($pass, $row['user_pass'])) {
                    // ユーザー情報を返す
                    $data = array(
                        'login' => true
                    );

                    return $data;
                }
            }

            // 認証失敗時はログイン失敗とする
            return array('login' => false, 'result' => 'password mismatch');
        } catch (PDOException $e) {
            return $e->getMessage();
        }
    }

    function create_user($pass, $mail)
    {
        try {

            $pdo = $this->get_pdo();

            //既に同じメールで登録されていないかの確認
            $sql =  "SELECT * FROM user_tbl WHERE user_mail = ?";
            $ps = $pdo->prepare($sql);
            $ps->bindValue(1, $mail, PDO::PARAM_STR);
            $ps->execute();
            $search = $ps->fetchAll();

            if ($search == null) {
                $sql2 = "INSERT INTO user_tbl (user_pass,user_mail) VALUE (?,?);";
                $ps = $pdo->prepare($sql2);
                $ps->bindValue(1, password_hash($pass, PASSWORD_DEFAULT), PDO::PARAM_STR);
                $ps->bindValue(2, $mail, PDO::PARAM_STR);
                $ps->execute();
                $id = $pdo->lastInsertId();
                $data = array(
                    'create_acount' => true,
                    'user_id' => $id
                );
            } else {
                $data = array("create_acount" => false, "result" => "duplication");
            }
        } catch (PDOException $e) {
            $data = $e->getMessage();
        }
        return $data;
    }
}
