import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { SvgXml } from 'react-native-svg'
import icons from './icons'
import { useAppTheme } from '../../hooks'

export type IconsType = keyof typeof icons

const HIT_SLOP_AREA = 10

interface IconProps {
  name: IconsType 
  disabled?: boolean
  isVisible?: boolean
  size?: number
  color?: string
  style?: ViewStyle | ViewStyle[]
  backgroundColor?: string
  onPress?: () => void
  testID?: string
}

export default function Icon({
  style,
  name,
  size = 24,
  color,
  onPress,
  isVisible = true,
  disabled,
  testID,
}: IconProps) {
  if (!isVisible) return null
  const { colors } = useAppTheme()

  const HIT_SLOP = { top: HIT_SLOP_AREA, bottom: HIT_SLOP_AREA, left: HIT_SLOP_AREA, right: HIT_SLOP_AREA }
  const onPressHandler = !!onPress && !disabled ? () => onPress() : undefined

  const drawIcon = () => (
    <SvgXml
      testID={testID}
      style={style}
      xml={icons[name](size, disabled ? colors.icon.disabled : color || colors.icon.active)}
      width={size}
      height={size}
    />
  )

  if (icons[name]) {
    if (!!onPressHandler) {
      return (
        <TouchableOpacity activeOpacity={1} hitSlop={HIT_SLOP} onPress={onPressHandler}>
          {drawIcon()}
        </TouchableOpacity>
      )
    } else {
      return drawIcon()
    }
  }
  return null
}
