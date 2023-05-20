<?php


class Debate
{
    function get_pdo()
    {
        $pdo = new PDO('mysql:host=mysql213.phy.lolipop.lan;dbname=LAA1418138-aidebate;charset=utf8', 'LAA1418138', 'apstdnb');
        return $pdo;
    }

    function create_debate($debate)
    {
        try {

            $pdo = $this->get_pdo();
            $sql = "INSERT INTO debate_tbl (user_id, title) VALUES (?, ?);";
            $ps = $pdo->prepare($sql);
            $ps->bindValue(1, $debate['id'], PDO::PARAM_INT);
            $ps->bindValue(2, $debate['title'], PDO::PARAM_STR);
            $ps->execute();
            $data = $pdo->lastInsertId();
        } catch (Exception $e) {
            $data = $e->getMessage();
        } catch (PDOException $e) {
            $data = $e->getMessage();
        }
        return $data;
    }

    function create_talk($talks)
    {
        try {

            $pdo = $this->get_pdo();
            $sql = "INSERT INTO talk_tbl (debate_id, gpt_id, talk) VALUES (?, ?, ?);";
            $ps = $pdo->prepare($sql);
            foreach ($talks as $row) {
                $ps->execute([
                    $row['debate_id'],
                    $row['gpt_id'],
                    $row['talk']
                ]);
            }
            $data = "created";
        } catch (Exception $e) {
            $data = $e->getMessage();
        } catch (PDOException $e) {
            $data = $e->getMessage();
        }
        return $data;
    }
}
