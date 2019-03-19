import React, { Component } from 'react';
import { Text } from 'react-native';
import _ from 'lodash'

/**
 *
 * @param Array<any> children
 * @param Array<number> styles
 * @param {string} type
 */
export default function applyStyle(children, styles, type) {
  if (!(styles instanceof Array)) {
    styles = [styles];
  }

  return children.map(child => {
    if (child.type.displayName === type || child.type.render.name === type) {
      const combinedStyle = _.assign({}, child.props.style, ...styles);
      return <Text key={child.key} {...child.props} style={combinedStyle} />;
    }

    return child;
  });
}
