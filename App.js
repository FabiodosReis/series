import { createStackNavigator, createAppContainer} from 'react-navigation';

import LoginPage from './src/pages/LoginPage';

const AppNavigator = createStackNavigator({

  'Login' : {
    
    screen: LoginPage
  }

});

const Appcontainer = createAppContainer(AppNavigator);

export default Appcontainer;