import '../App.css';
const ComponentA = ({bgColor}) => {
    return(
        <div className="component-styles" style={{ backgroundColor: bgColor }}>Component A</div>
    )
}

export default ComponentA;