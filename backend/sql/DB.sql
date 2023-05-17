//ユーザテーブル
CREATE TABLE user_tbl(
    user_id         INT             AUTO_INCREMENT  ,
    user_pass       VARCHAR(255)    NOT NULL        ,
    user_mail       VARCHAR(50)     NOT NULL        ,
    PRIMARY KEY     (user_id)
);

//GPTテーブル
CREATE TABLE gpt_tbl(
    gpt_id          INT             AUTO_INCREMENT  ,
    user_id         INT                             ,
    gpt_name        VARCHAR(100)    NOT NULL        ,
    gpt_img         INT             NOT NULL        ,
    character       VARCHAR(500)    NOT NULL        ,
    position        VARCHAR(50)     NOT NULL        ,
    search          INT             DEFAULT 0       ,
    PRIMARY KEY     (gpt_id)                        ,
    FOREIGN KEY     (user_id) REFERENCES user_tbl(user_id)
);