import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

/*export async function initDatabase() {
    /*if((await FileSystem.getInfoAsync(FileSystem.documentDirectory + "arvenses_db.db")).exists) {
        await FileSystem.deleteAsync(FileSystem.documentDirectory + "arvenses_db.db");
    }//

    if(!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    }

    if(!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite/arvenses_db.db")).exists) {
        await FileSystem.downloadAsync(Asset.fromModule(require("./src/assets/database/arvenses_db.db")).uri, FileSystem.documentDirectory + "SQLite/arvenses_db.db");
    }
}*/

/**
 * Código extraido de https://github.com/expo/eas-cli/issues/1335.
 */
export async function initDatabase() {
    const localFolder = FileSystem.documentDirectory + 'SQLite';
    const dbName = 'arvenses_db.db';
    const localURI = localFolder + '/' + dbName;
      
    if (!(await FileSystem.getInfoAsync(localFolder)).exists) {
        await FileSystem.makeDirectoryAsync(localFolder);
    }
      
    let asset = Asset.fromModule(require('./src/assets/database/arvenses_db.db'));
      
    if (!asset.downloaded) {
        await asset.downloadAsync().then(value => {
            asset = value;
            console.log('asset downloadAsync - finished');
        })
      
        let remoteURI = asset.localUri;
      
        await FileSystem.copyAsync({from: remoteURI, to: localURI}).catch(error => {
            console.log('asset copyDatabase - finished with error: ' + error);
        })
    } 
    else {
        // for iOS - Asset is downloaded on call Asset.fromModule(), just copy from cache to local file
        if (asset.localUri || asset.uri.startsWith("asset") || asset.uri.startsWith("file")) {
            let remoteURI = asset.localUri || asset.uri;
      
            await FileSystem.copyAsync({from: remoteURI, to: localURI}).catch(error => {
                console.log("local copyDatabase - finished with error: " + error);
            })
        } 
        else if (asset.uri.startsWith("http") || asset.uri.startsWith("https")) {
            let remoteURI = asset.uri;
      
            await FileSystem.downloadAsync(remoteURI, localURI).catch(error => {
                console.log("local downloadAsync - finished with error: " + error);
            })
        }
    }
}

export const database = SQLite.openDatabase('arvenses_db.db');