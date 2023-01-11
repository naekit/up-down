import useIncrease from "../hooks/useCounter"

import Card from "./Card"

const BackwardCounter = () => {
	const counter = useIncrease(false)
	return <Card>{counter}</Card>
}

export default BackwardCounter
