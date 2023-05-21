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

    //議事録API
    function get_minutes($user_id)
    {
        try {
            $pdo = $this->get_pdo();

            $sql = "SELECT * FROM debate_tbl WHERE user_id = ?";
            $ps = $pdo->prepare($sql);
            $ps->bindValue(1, $user_id, PDO::PARAM_INT);
            $ps->execute();
            $search = $ps->fetchAll(PDO::FETCH_ASSOC);
            $class = new Gpt();
            foreach ($search as $row) {
                $data[] = array(
                    'debate_id' => $row['debate_id'],
                    'title' => $row['title'],
                    'gpts' => $class->get_debate_gpt($row['debate_id'])
                );
            }
        } catch (Exception $e) {
            $data = $e->getMessage();
        } catch (PDOException $e) {
            $data = $e->getMessage();
        }
        return $data;
    }


    function get_talklist($debate_id)
    {
        try {

            $pdo = $this->get_pdo();
            $sql = "SELECT * FROM talk_tbl WHERE debate_id = ? ORDER BY talk_id";
            $ps = $pdo->prepare($sql);
            $ps->bindValue(1, $debate_id, PDO::PARAM_INT);
            $ps->execute();
            $search = $ps->fetchAll(PDO::FETCH_ASSOC);
            $data = $search;
        } catch (Exception $e) {
            $data = $e->getMessage();
        } catch (PDOException $e) {
            $data = $e->getMessage();
        }
        return $data;
    }

    function get_debate_info($debate_id)
    {
        try {
            $pdo = $this->get_pdo();

            $sql = "SELECT * FROM debate_tbl WHERE debate_id = ?";
            $ps = $pdo->prepare($sql);
            $ps->bindValue(1, $debate_id, PDO::PARAM_INT);
            $ps->execute();
            $search = $ps->fetchAll(PDO::FETCH_ASSOC);
            $class = new Gpt();
            
            foreach ($search as $row) {
                $data[] = array(
                    'debate_id' => $row['debate_id'],
                    'title' => $row['title'],
                    'gpts' => $class->get_debate_gpt($row['debate_id'])
                );
            }
        } catch (Exception $e) {
            $data = $e->getMessage();
        } catch (PDOException $e) {
            $data = $e->getMessage();
        }
        return $data;
    }
}
