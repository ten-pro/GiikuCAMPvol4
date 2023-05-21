<?php


class Gpt
{
    function get_pdo()
    {
        $pdo = new PDO('mysql:host=mysql213.phy.lolipop.lan;dbname=LAA1418138-aidebate;charset=utf8', 'LAA1418138', 'apstdnb');
        return $pdo;
    }

    function create_gpt($gpts)
    {
        try {
            $pdo = $this->get_pdo();
            $sql = "INSERT INTO gpt_tbl (user_id, gpt_name, gpt_gender, gpt_img, gpt_character, position) VALUES (?, ?, ?, ?, ?, ?);";
            $ps = $pdo->prepare($sql);

            foreach ($gpts as $row) {
                $ps->execute([
                    $row['user_id'],
                    $row['gpt_name'],
                    $row['gpt_gender'],
                    $row['gpt_img'],
                    $row['gpt_character'],
                    $row['position']
                ]);
                $gptId = $pdo->lastInsertId();
                $row['gpt_id'] = $gptId;
                $data[] = $row;
            }
        } catch (Exception $e) {
            $data = $e->getMessage();
        } catch (PDOException $e) {
            $data = $e->getMessage();
        }
        return $data;
    }


    function get_debate_gpt($debate_id)
    {
        try {
            $pdo = $this->get_pdo();

            $sql = "SELECT *
            FROM gpt_tbl
            WHERE gpt_id IN (
                SELECT DISTINCT gpt_id
                FROM talk_tbl
                WHERE debate_id = ?
            );";
            $ps = $pdo->prepare($sql);
            $ps->bindValue(1, $debate_id, PDO::PARAM_INT);
            $ps->execute();
            $search = $ps->fetchAll(PDO::FETCH_ASSOC);
            $data = $search;
        } catch (PDOException $e) {
            $data = $e->getMessage();
        } catch (Error $e) {
            $data = $e->getMessage();
        }
        return $data;
    }


    function get_gptlist($id)
    {
        try {
            $pdo = $this->get_pdo();

            $sql = "SELECT * FROM gpt_tbl WHERE search = 1 AND user_id = ?;";
            $ps = $pdo->prepare($sql);
            $ps->bindValue(1, $id, PDO::PARAM_INT);
            $ps->execute();
            $search = $ps->fetchAll(PDO::FETCH_ASSOC);
            $data = $search;
        } catch (PDOException $e) {
            $data = $e->getMessage();
        } catch (Error $e) {
            $data = $e->getMessage();
        }
        return $data;
    }

    function search_gpt($character)
    {
        try {
            $pdo = $this->get_pdo();

            $sql = "SELECT * FROM gpt_tbl WHERE gpt_character = ?;";
            $ps = $pdo->prepare($sql);
            $ps->bindValue(1, '%'.$character.'%', PDO::PARAM_INT);
            $ps->execute();
            $search = $ps->fetchAll(PDO::FETCH_ASSOC);
            $data = $search;
        } catch (PDOException $e) {
            $data = $e->getMessage();
        } catch (Error $e) {
            $data = $e->getMessage();
        }
        return $data;
    }
}
