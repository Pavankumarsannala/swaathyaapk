import React from 'react'
import { View, Text, StyleSheet , TouchableOpacity, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { CheckBox } from 'react-native-elements';
import { SafeAreaView } from 'react-native';

const Respiratory = () => {
  const mallampatiGrade =   useSelector((state) => state.otPhysicalExamination.mallampatiGrade);
  const respiratory =   useSelector((state) => state.otPhysicalExamination.respiratory);
 
 const dispatch = useDispatch()
 
 const handleButtonClick = (selectedClass) => {
  dispatch({
    type: "updateOtPhysicalExamination",
    payload: {
      mallampatiGrade: {
        ...mallampatiGrade, // Preserve other fields
        class: selectedClass, // Update the selected class
      },
    },
  });
};


const handleCheckboxChange = (field, value) => {
  dispatch({
    type: 'updateOtPhysicalExamination',
    payload: {
      respiratory: {
        ...respiratory,
        [field]: value,
      },
    },
  });
};


{/* <Image source={require("../../../assets/tongue.jpeg")} style={styles.image} /> */}
console.log("mallampatiGrade==",mallampatiGrade)
console.log("respiratory=======",respiratory)

return (
  <SafeAreaView style={{ flex: 1 }}>
   <ScrollView contentContainerStyle={styles.container}>
 <View style={styles.checkboxGroup}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Dry Cough"
          checked={respiratory.dryCough}
          onPress={() => handleCheckboxChange('dryCough', !respiratory.dryCough)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Productive Cough"
          checked={respiratory.productiveCough}
          onPress={() => handleCheckboxChange('productiveCough', !respiratory.productiveCough)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Asthma"
          checked={respiratory.asthma}
          onPress={() => handleCheckboxChange('asthma', !respiratory.asthma)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Recent URI/LRTI"
          checked={respiratory.recentURILRTI}
          onPress={() => handleCheckboxChange('recentURILRTI', !respiratory.recentURILRTI)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          title="TB"
          checked={respiratory.tb}
          onPress={() => handleCheckboxChange('tb', !respiratory.tb)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Pneumonia"
          checked={respiratory.pneumonia}
          onPress={() => handleCheckboxChange('pneumonia', !respiratory.pneumonia)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          title="COPD"
          checked={respiratory.copd}
          onPress={() => handleCheckboxChange('copd', !respiratory.copd)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          title="OSA"
          checked={respiratory.osa}
          onPress={() => handleCheckboxChange('osa', !respiratory.osa)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Recurrent Tonsils"
          checked={respiratory.recurrentTonsils}
          onPress={() => handleCheckboxChange('recurrentTonsils', !respiratory.recurrentTonsils)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Breathlessness"
          checked={respiratory.breathlessness}
          onPress={() => handleCheckboxChange('breathlessness', !respiratory.breathlessness)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Dyspnea"
          checked={respiratory.dyspnea}
          onPress={() => handleCheckboxChange('dyspnea', !respiratory.dyspnea)}
        />
      </View>
    </View>

    <Text style={{ padding: 10, fontWeight: 'bold' }}>Mallampati Grade</Text>
   <View style={styles.buttonGroup}>
    <TouchableOpacity
      style={[
        styles.button,
        mallampatiGrade.class === 1 ? styles.selected : styles.unselected,
      ]}
      onPress={() => handleButtonClick(1)}
      // disabled={physicalExaminationReadOnly}
    >
      <Text style={[
      styles.buttonText,
      mallampatiGrade.class === 1 ? styles.selectedText : styles.unselectedText,
    ]}>Class-I</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.button,
        mallampatiGrade.class === 2 ? styles.selected : styles.unselected,
      ]}
      onPress={() => handleButtonClick(2)}
      // disabled={physicalExaminationReadOnly}
    >
      <Text style={[
      styles.buttonText,
      mallampatiGrade.class === 2 ? styles.selectedText : styles.unselectedText,
    ]}
      >Class-II</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.button,
        mallampatiGrade.class === 3 ? styles.selected : styles.unselected,
      ]}
      onPress={() => handleButtonClick(3)}
      // disabled={physicalExaminationReadOnly}
    >
      <Text style={[
      styles.buttonText,
      mallampatiGrade.class === 3 ? styles.selectedText : styles.unselectedText,
    ]}
      >Class-III</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.button,
        mallampatiGrade.class === 4 ? styles.selected : styles.unselected,
      ]}
      onPress={() => handleButtonClick(4)}
      // disabled={physicalExaminationReadOnly}
    >
      <Text style={[
      styles.buttonText,
      mallampatiGrade.class === 4 ? styles.selectedText : styles.unselectedText,
    ]}
      >Class-IV</Text>
    </TouchableOpacity>

   
  </View>
 </ScrollView>
 </SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  
    paddingBottom:80,
  },
buttonGroup: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 10,
},
button: {
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderWidth: 1,
  borderRadius: 5,
  alignItems: 'center',
},
selected: {
  backgroundColor: '#007bff',
  borderColor: '#007bff',
},
unselected: {
  backgroundColor: '#ffffff',
  borderColor: '#007bff',
},
selectedText: {
  color: '#ffffff', // Color when selected
},
unselectedText: {
  color: '#007bff', // Color when unselected
},
buttonText: {
  color: '#007bff',
  fontWeight: 'bold',
},
checkboxGroup: {
  padding: 10,
},
checkboxContainer: {
  marginBottom: 10,
},
});

export default Respiratory