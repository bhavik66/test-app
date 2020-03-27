import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Tab1 from '../screen/Tab1';
import Tab2 from '../screen/Tab2';
import Tab3 from '../screen/Tab3';
import Account from '../screen/Account';

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Tab3" component={Tab3} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default Dashboard;
