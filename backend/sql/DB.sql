//ユーザテーブル
CREATE TABLE user_tbl(
    user_id         INT             AUTO_INCREMENT  ,
    user_pass       VARCHAR(255)    NOT NULL        ,
    user_mail       VARCHAR(100)    NOT NULL        ,
    PRIMARY KEY     (user_id)
);

//GPTテーブル
CREATE TABLE gpt_tbl(
    gpt_id          INT             AUTO_INCREMENT  ,
    user_id         INT                             ,
    gpt_name        VARCHAR(100)    NOT NULL        ,
    gpt_img         INT             NOT NULL        ,
    gpt_character   VARCHAR(500)    NOT NULL        ,
    position        VARCHAR(50)     NOT NULL        ,
    search          INT             DEFAULT 0       ,
    PRIMARY KEY     (gpt_id)                        ,
    FOREIGN KEY     (user_id)       REFERENCES user_tbl(user_id)
);

//ディベートテーブル
CREATE TABLE debate_tbl(
    debate_id       INT             AUTO_INCREMENT  ,
    user_id         INT                             ,
    title           VARCHAR(100)    NOT NULL        ,
    judgement       VARCHAR(30)                     ,
    PRIMARY KEY     (debate_id)                     ,
    FOREIGN KEY     (user_id)       REFERENCES user_tbl(user_id)
);

//トークテーブル
CREATE TABLE talk_tbl(
    talk_id         INT             AUTO_INCREMENT  ,
    debate_id       INT                             ,
    gpt_id          INT                             ,
    talk            VARCHAR(1000)   NOT NULL        ,
    PRIMARY KEY     (talk_id)                       ,
    FOREIGN KEY     (debate_id)     REFERENCES debate_tbl(debate_id),
    FOREIGN KEY     (gpt_id)        REFERENCES gpt_tbl(gpt_id)
);