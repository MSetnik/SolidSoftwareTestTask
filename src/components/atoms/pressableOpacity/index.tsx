import React, { useState } from "react"
import {
	Pressable,
	PressableProps,
	PressableStateCallbackType
} from "react-native"

const PressableOpacity: React.FC<PressableProps> = ({
	children,
	onPress,
	style,
	...props
}) => {
	const [pressOpacity, setPressOpacity] = useState<number>(1)

	const onPressIn = () => setPressOpacity(0.8)
	const onPressOut = () => setPressOpacity(1)

	return (
		<Pressable
			onPress={onPress}
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			style={(state: PressableStateCallbackType) => {
				const baseStyle =
					typeof style === "function" ? style(state) : style
				return [{ opacity: pressOpacity }, baseStyle]
			}}
			{...props}
		>
			{children}
		</Pressable>
	)
}

export default PressableOpacity
