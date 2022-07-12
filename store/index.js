import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
// ツリー構造を作る
const rootReducer = combineReducers({
  user: userReducer,
});
const persistConfig = {
  key: 'root',
  // 保存する場所
  storage: AsyncStorage,
  // reduxのツリーを全て保存するのか、特定のものだけ保存するのかを選ぶ
  // whiteリスト形式かブラックリスト形式か選べる。
  // ここではホワイトリスト形式
  whitelist: ['user'],
};
// persistReducerを作成
const persistedReducer = persistReducer(persistConfig, rootReducer);
// storeを作成
const store = createStore(persistedReducer, composeWithDevTools());
// persistを作成
export const persistor = persistStore(store);
export default store;
