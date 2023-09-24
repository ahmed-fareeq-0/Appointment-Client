import { View, Text } from 'react-native'
import React from 'react'
import DoctorsList from '../components/doctorsListComponent'
import SearchComponent from '../components/searchComponent'

const DoctorsScreen = () => {
  return (
    <View>
      {/* <SearchComponent /> */}
      <DoctorsList />
    </View>
  )
}

export default DoctorsScreen