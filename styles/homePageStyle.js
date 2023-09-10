

import { StyleSheet } from 'react-native';

export const homePageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 5000
  
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  textContainer:{
    width: 130,
    marginLeft: 10
  },

  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  welcomeText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: 'gray'
  },

  iconContainer: {
    marginLeft: 'auto',
    
  },

 

  listContainer: {
    marginTop: 20,
    marginBottom: 0
  },
  boxContainer: {
    flexDirection: 'row',
    height:100
  },
  box: {
    width: 320,
    height: 150,
    marginLeft: 10,
    marginTop: 20,
    borderRadius:15,
    
  },


  feed:{
    width: 250,
    height: 150,
    marginLeft: 30,
    marginTop: 20,
    borderRadius:15,
  },

  med:{
    width: 150,
    height: 220,
    marginLeft: 30,
    marginBottom: 30,
    marginTop: 20,
    borderRadius:15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 3,
      height: 3,
      shadowRadius: 4,
      elevation: 3, 
    },
  },

  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
    marginBottom: 180
    
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    margin: 5,
  },
  bottomBoxesContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
  },
  bottomBox: {
    width: '80%',
    height: 50,
    flexDirection: 'row',
    marginTop:10,
    marginRight:40,
    marginBottom:10,
    borderRadius:8
  },
  availabilityText: {
    fontSize: 16,
    marginLeft: 35,
    marginTop: 15,
    color: '#159900'
  },
  switchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  calendarBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarIcon: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 10
  },
  calendarText: {
    fontSize: 16,
  },
  arrowIcon: {
    fontSize: 20,
    marginTop: 18,
    marginRight: 10
  },

  communtyFeedBox:{
    width: '100%',
    flexDirection: 'row',    
  },

  communityText:{
    fontSize: 24,
    marginLeft: 35,
    fontWeight: "bold"
  },

 
  
});
