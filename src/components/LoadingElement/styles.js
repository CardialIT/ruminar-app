import { StyleSheet } from 'react-native';
import { verdePrincipal } from '../../colors';

export default StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: verdePrincipal,
    },
  });