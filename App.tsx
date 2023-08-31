/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import analytics from '@react-native-firebase/analytics';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Button
            title="Send event: login"
            onPress={async () =>
              await analytics().logEvent('login', {
                method: 'email'
              })
            }
          />
          <Button
            title="Send event: scan_barcode"
            onPress={async () =>
              await analytics().logEvent('scan_barcode', {
                code: '711065'
              })
            }
          />
          <Button
            title="Send event: add_to_cart"
            onPress={async () =>
              await analytics().logEvent('add_to_cart', {
                custom_param_cart_id: '1234',
                items: [
                  {
                    item_id: '67891',
                    item_name: 'Donut Friday Scented Mug',
                    item_brand: 'Google',
                    coupon: '10%_off',
                    discount: 12.5,
                    item_category: 'Apparel',
                    item_devis: "oui",
                    item_list_name: "Liste de produits"
                  }
                ]
              })
            }
          />
          <Button
            title="Send event: purchase"
            onPress={async () =>
              await analytics().logEvent('purchase', {
                transaction_id: '26113805',
                custom_param: '1234',
                items: [
                  {
                    item_id: '123456',
                    item_name: 'Donut Friday Scented T-Shirt',
                    item_custom_param: '6789',
                    item_flags: 'PMR/Produit nouveau'
                  },
                  {
                    item_id: '67890',
                    item_name: 'Donut Friday Scented Mug',
                    item_brand: 'Google',
                    coupon: '10%_off',
                    discount: 12.5,
                    item_category: 'Apparel',
                    item_devis: "oui"
                  }
                ]
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
