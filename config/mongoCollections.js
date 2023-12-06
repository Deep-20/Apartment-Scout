import {dbConnection} from './mongoConnection.js';

/* This will allow you to have one reference to each collection per app */
const getCollectionFn = (collection) => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      _col = await db.collection(collection);
    }

    return _col;
  };
};

//export const users = getCollectionFn('users');
export const primaryUsers = getCollectionFn('primaryUsers');
export const scoutUsers = getCollectionFn('scoutUsers');
export const listings = getCollectionFn('listings');
export const messages = getCollectionFn('messages');