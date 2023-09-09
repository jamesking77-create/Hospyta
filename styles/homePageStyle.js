

import { StyleSheet } from 'react-native';

export const homePageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
  },
  boxContainer: {
    flexDirection: 'row',
  },
  box: {
    flexDirection: 'row',
    width: 320,
    height: 150,
    margin: 10,
    borderRadius:15
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
    width: '100%',
    height: 100,
    flexDirection: 'row',
  },
  availabilityText: {
    fontSize: 16,
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
    fontSize: 24,
  },
  calendarText: {
    fontSize: 16,
  },
  arrowIcon: {
    fontSize: 24,
  },
});
