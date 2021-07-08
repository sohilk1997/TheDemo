import React, { FC } from 'react';
import { View, Text, SafeAreaView, StatusBar, FlatList } from 'react-native';
import styles from './styles';
import { useTranslation } from "react-i18next";
import SubLabelText from "components/SubLabelText";
import Header from 'components/Header';
import colors from "assets/colors";
import { TouchableOpacity } from 'react-native';

const Proposals = (props: any) => {
    const { t } = useTranslation();
 const [items] = React.useState(
    new Array(20).fill(null).map((_, idx) => idx + 1)
  );
  const onOpacityPress = (item:any) => props.navigation.navigate('MyAttention', {item: item});

    return (        
        <SafeAreaView style={styles.container}>
            <Header title={t('str_proposal')} testID ={'Proposals.Header'}/>
            <View style={styles.content}>
                <SubLabelText title={t('str_proposal')} textColor={colors.blue_1} customStyle={styles.labelStyle} />
            {/* <FlatList style={{ backgroundColor: 'yellow'}} data={[{},{},{},{},{},{},{},{}]} 
            renderItem={() => <Text style={{color:'red'}}>sdeswde</Text>}
            /> */}
             <View>
      <Text style={styles.header}>List of numbers from 1 to 20</Text>
      <FlatList
        keyExtractor={(_, idx) => `${idx}`}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onOpacityPress(item)}
            style={styles.row}
          >
            <Text>Item number {item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
            </View>
        </SafeAreaView>
    )
}

export default Proposals;
