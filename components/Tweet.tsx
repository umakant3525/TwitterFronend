import { StyleSheet , Image} from 'react-native';
import { Text, View } from '@/components/Themed';


export default function Tweet({tweet}) {
  return (
    <View style={styles.container}>
      <Image 
      src={tweet.user.image}
      style={styles.userImage} 
      />
      <View style={styles.mainContainer}> 
      <Text style={styles.name} >{tweet.user.name}</Text>
    <Text style={styles.name}>{tweet.content}</Text>
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
    backgroundColor : 'white'
  },
  name: {
    fontWeight: '600',
    color : 'black',
  },
  username: {
    color: 'gray',
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },

  // footer
  footer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
});

