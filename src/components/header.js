import React from 'react'
import { Text, View } from 'react-native'
import I18n from 'albums/i18n/i18n'

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8'
  }
}

const Header = () => {
  const { textStyle, viewStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{I18n.t('title')}</Text>
    </View>
  )
}

export default Header
