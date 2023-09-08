import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  splashContainer: {
    flex: 1,
    backgroundColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
  },


  logo: {
    width: 250,
    height: 250,
    marginTop: 180
  },

  splashBackground:{
    height: 850
  },


  onboardContainer: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },


  textLogo: {
    position: 'absolute',
    top: 9, 
    left: 8, 
    width: 100, 
    height: 40, 
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 20, 
    left: 20, 
    right: 20, 
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  signInButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue', 
    borderRadius: 8,
    marginHorizontal: 5,
    maxHeight:42,
    marginTop: 80,
    width:330
  },

  signUpButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tranparent', 
    border: ' solid 2pt #fff',
    borderRadius: 8,
    marginHorizontal: 5,
    maxHeight:42,
    marginTop: 20,
    width:330
  },

  buttonText: {
    color: 'white', 
    fontSize: 16, 
  },

  paragraph: {
    color: 'white',
    fontSize: 26,
    textAlign: 'left',
    marginTop: 220,
    marginLeft:50,
    fontWeight: 450,
    
    

  },

  caption:{
    color:'#E32654' ,
    marginLeft: 50,
    marginTop:0
  },

 gradient:{
  maxHeight: 900,
  flex: 1,
  paddingLeft: 20,
  paddingBottom:20
  
 }
});
