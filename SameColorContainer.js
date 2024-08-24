import SameColor from "./SameColor";

function SameColorContainer () {
    const ColorValues = [
        { title: "text1", color: "red" },
        { title: "text2", color: "green" },
        { title: "text3", color: "lavender" },
        { title: "text4", color: "blue" },
        { title: "text5", color: "orange" },
    ]
    return (
        <>
            {/* <ColorCard title="text" color="green"/>
         <ColorCard title="text1" color="blue"/>
         <ColorCard title="text2" color="red"/> */}
            {
                ColorValues.map((obj) =>
                    <SameColor title={obj.title} color={obj.color} />
                )
            }

        </>
    )
}
export default SameColorContainer