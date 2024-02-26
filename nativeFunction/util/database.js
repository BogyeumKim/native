import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("places.db");

export function init() {

    const promise = new Promise((resolve ,reject) => {
        database.transaction((tx) => {
            tx.executeSql(
              `CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    imageUri TEXT NOT NULL,
                    address TEXT NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL
                )`,
              [],
              //   아래 위쪽은 성공시 콜백 아래는 에러 _,는 인자임 안쓰니까 블랭크
              () => {
                resolve()
              },
              (_, error) => {
                reject(error);
              }
            );
          });
    });

    return promise;
}
