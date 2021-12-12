import React ,{Component} from "react";
class info extends Component{
state = {
    yosh: 20,
}
qosh = () => {
    this.setState({
        yosh:state.yosh +1
    })
}
ayri = () => {
    this,setState({
        yosh: state.yosh -1
    })
}
    render(){
return(
    <>
<div className="salom">
    <div className="zor">
        <h1>Welcome</h1>
    </div>
    <div className="qales">
    <input className="salom" type="number"/>
    </div>
    
</div>
<div className="katta">
    <h1>yosh:{this.state.yosh}</h1>
    <h2>ayri:{this.state.yosh}</h2>

    <button onClick={this.qosh}></button>
    <button onClick={this.ayri}></button>
</div>
  </>
)
};
}

export default info;

