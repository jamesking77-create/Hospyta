import { StyleSheet } from 'react-native';

const onBoardingStyle = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientOverlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  paragraph: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default onBoardingStyle;
