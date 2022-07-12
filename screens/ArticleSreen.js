import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';
import ClipButton from '../components/ClipButton';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'FFF',
  },
});

export default function ArticleScreen({ route }) {
  const { article } = route.params;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { clips } = user;

  const isClipped = () => {
    return clips.some((clip) => clip.url === article.url);
  };
  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip({ clip: article }));
    } else {
      dispatch(addClip({ clip: article }));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()}></ClipButton>

      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
}
