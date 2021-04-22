import { React } from "react";
import { connect } from "react-redux";

const Test01Div =(props)=>{ 

    const {backgroundColorState} = props
    return(
        <div style = {backgroundColorState}>
            TEST01TEST01TEST01TEST01
        </div>
    )

    
 }

 const mapStateToProps = (state)=>{ 
     return{
        backgroundColorState:state
     }
  }

  const mapDisPatchToProps = ()=>{  }

  export default connect(mapStateToProps , mapDisPatchToProps)(Test01Div)