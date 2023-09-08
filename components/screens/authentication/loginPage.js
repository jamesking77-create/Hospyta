import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import registrationStyles from "../../../styles/registrationStyles";

const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleRegister = () => {};

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack('FirstOnBoard')}
        style={{
          border: "solid 0.5pt grey ",
          borderRadius: 3,
          width: 28,
          padding: 4,
        }}
      >
        <Icon name="arrow-left" size={15} />
      </TouchableOpacity>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
        Hello Dr!
      </Text>
      <Text style={{ fontSize: 14, marginTop: 10 }}>
        Find your details or continue with social media
      </Text>

      <View style={registrationStyles.inputContainer}>
        <Icon
          name="envelope"
          size={20}
          color="gray"
          style={registrationStyles.icon}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={[
            registrationStyles.textInput,
            {
              borderWidth: 0,
              borderColor: "transparent",
              outline: "none",
            },
          ]}
        />
      </View>

      <View style={registrationStyles.inputContainer}>
        <Icon
          name="lock"
          size={20}
          color="gray"
          style={registrationStyles.icon}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={[
            registrationStyles.textInput,
            {
              borderWidth: 0,
              borderColor: "transparent",
              outline: "none",
            },
          ]}
        />
      </View>

      <View style={registrationStyles.checkBox}>

        <Text style={{ marginLeft: 220 }}>Forgot password ?</Text>
      </View>

      <TouchableOpacity
        onPress={handleRegister}
        style={registrationStyles.registerBotton}
      >
        <Text style={{ color: "white", fontSize: 18 }}>sign in</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            borderBottom: "solid 0.1pt gray",
            width: 80,
            height: 18,
            margin: 13,
          }}
        />
        <Text style={{ textAlign: "center", marginVertical: 20 }}>
          Or sign in with
        </Text>
        <View
          style={{
            borderBottom: "solid 0.1pt gray",
            width: 80,
            height: 18,
            margin: 13,
          }}
        />
      </View>

      <TouchableOpacity style={registrationStyles.googleAuthBotton}>
        <Image
          source={"../../../asset/icons/google.png"}
          style={{ width: 20, height: 20, marginLeft: 80, marginRight: 20 }}
        />
        <Text style={{ color: "gray", fontSize: 13 }}>sign up with google</Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Don't have an account? <Text style={{ color: "blue" }}>Register</Text>
      </Text>
    </View>
  );
};

export default LoginPage;
