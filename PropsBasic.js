function PropsBasic(props) {
    console.log(props)
    return (
        <>
        <p>See there {props.name} is playing!!</p>
        <p>Her age is {props.age }</p>
        <p>Her age is {props.age + 10 }</p>
        </>
    )
}
export default PropsBasic;