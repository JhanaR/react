import './SameColor.css'
 
function SameColor ({title,color}) {
    //props = {title,color}
    return(
        <div className = "coloring" style={{backgroundColor:color}}>
            {title}
        </div>
    )
}

export default SameColor;