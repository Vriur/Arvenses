import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

export async function openDatabase() {
    if(!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite")).exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "SQLite");
    }

    if(!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite/arvenses_db.db")).exists) {
        await FileSystem.downloadAsync(Asset.fromModule(require("./src/assets/database/arvenses_db.db")).uri, FileSystem.documentDirectory + "SQLite/arvenses_db.db");
    }

    return SQLite.openDatabase("arvenses_db.db");
}