import { View, Text, Pressable, Image } from 'react-native';
import styles from './nearbyjobcard.style';
import { checkImageURL } from '../../../../utils';

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <Pressable style={styles.container} onPress={handleNavigate}
    >
      <Pressable style={styles.logoContainer}>
        <Image
          source={{ uri: checkImageURL(job.employer_logo)
            ? job.employer_logo
            : 'https://placehold.co/200x200'
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </Pressable>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>
          {job.job_employment_type}
        </Text>

      </View>
    </Pressable>
  )
}

export default NearbyJobCard