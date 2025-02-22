import { View, Text, Pressable, Image } from 'react-native';


import styles from './popularjobcard.style';
import { checkImageURL } from '../../../../utils';

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <Pressable
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <Pressable style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: checkImageURL(item.employer_logo)
            ? item.employer_logo
            : 'https://placehold.co/200x200'
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </Pressable>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>
          {item.job_country}
        </Text>

      </View>
    </Pressable>
  )
}

export default PopularJobCard