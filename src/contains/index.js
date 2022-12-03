import Count from "../components";
import {DEC, decreaseCount, INC, increaseCount} from "../store/actions";
import {connect} from "react-redux";

function  PropsToApp(props){
    return(
        <Count store={props}/>
    )
}
const mapToStateProps=(state)=>{
    return{
        var:state.count.count
    }
}
const mapToDispatch=(dispatch)=>{
    return {
        increase:()=>dispatch(INC()),
        decrease:()=>dispatch(DEC())
    }
}

export default connect(mapToStateProps,mapToDispatch)(PropsToApp)