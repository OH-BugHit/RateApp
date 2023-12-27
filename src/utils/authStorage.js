import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const rawAccessToken = await AsyncStorage.getItem(
      `${this.namespace}:accessToken`
    );
    return rawAccessToken ? JSON.parse(rawAccessToken) : [];
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(accessToken)
    );
    console.log(`New access token added to storage, value: ${accessToken}`);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;

//Varmista kun otat käyttöön että tarviiko stringify, kun täs on vaan yksi string joka tulee ja sit palautukseen kans et : "" tms.
