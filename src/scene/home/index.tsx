import React from "react"
import { Text } from "react-native"
import PressableOpacity from "../../components/atoms/pressableOpacity"

const Home: React.FC = () => {
	const [bgColor, setBgColor] = React.useState<{
		r: number
		g: number
		b: number
	}>({ r: 255, g: 255, b: 255 })

	const changeBgColor = () => {
		setBgColor({
			r: Math.random() * 255,
			g: Math.random() * 255,
			b: Math.random() * 255
		})
	}

	return (
		<PressableOpacity
			onPress={changeBgColor}
			style={{
				backgroundColor: `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`,
				flex: 1,
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<Text>Hello there</Text>
		</PressableOpacity>
	)
}

export default Home
