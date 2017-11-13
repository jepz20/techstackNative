import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
 } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate () {
    LayoutAnimation.spring()
  }

  renderDescription () {
    const { expanded } = this.props
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {this.props.data.description}
          </Text>
        </CardSection>
      )
    }
  }
  render () {
    const { data, selectLibrary } = this.props
    const { title, id } = data
    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.title} >{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => ({
  expanded: ownProps.data.id === state.selectedLibraryId
})

export default connect(mapStateToProps, actions)(ListItem)
