import useIncrease from "../hooks/useCounter"
import Card from "./Card"

const ForwardCounter = () => {
	const counter = useIncrease()
	return <Card>{counter}</Card>
}

export default ForwardCounter
