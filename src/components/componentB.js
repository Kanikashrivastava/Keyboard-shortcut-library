import '../App.css';

const ComponentB = ({bgColor}) => {
    return(
        <div className="component-styles" style={{backgroundColor: bgColor}}>Component B</div>
    )
}

export default ComponentB;