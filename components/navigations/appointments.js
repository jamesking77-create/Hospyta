import react from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Appointment =()=>{
    return(
        <View>
             <View style={{ width:300, marginLeft: 5, flexDirection: 'row'}}>
                  <View style={{backgroundColor:'#FFFFFF24', borderRadius:12, marginLeft: 20, width: 50, height:80, marginTop:20}}>

                  </View>
                  <View>
                      <Text style={{marginLeft: 20, marginTop: 30, color: '#fff'}}>Pending Appointment</Text> {'\n'}
                      <Text style={{marginLeft: 20, color: '#fff', fontSize: 20, fontWeight: 'bold' }}>John Doe</Text>
                      <Text style={{marginLeft: 20, color: '#fff'}}>High blood pressure</Text>
                  </View>
              </View>
              <View style={{ width:300, marginLeft: 10, flexDirection: 'row', height:30}}>
                  <View style={{ width: 80, marginLeft: 50, paddingLeft: 25}}>
                    <Text style={{fontSize: 13, color: '#fff', marginTop: 10}}>00:00:00</Text>
                  </View>
                  <View style={{ width: 150, marginLeft: 3, borderRadius: 14, backgroundColor: '#fff', flexDirection: 'row'}}>
                      <Text  style={{marginLeft: 20, color: '#000', fontSize: 15, fontWeight: 20, marginTop:3 }}>View patience</Text>
                      <Icon name="arrow-right" size={15} style={{marginTop: 8, marginLeft: 10 }} />
                  </View>
              </View>
        </View>
    )
}

export default Appointment;