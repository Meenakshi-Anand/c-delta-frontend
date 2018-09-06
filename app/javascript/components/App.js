import React, { Component } from "react"
import Description from "./Description"
import _ from "lodash"
class App extends Component {
 constructor(props){
   super(props);
   this.state={qualities:this.extract(),flag:"",ord:""};
   this.sortByName=this.sortByName.bind(this);
   this.sortByScore=this.sortByScore.bind(this);
 }
 extract(){
  var fieldValues = jQuery.parseJSON(JSON.stringify(window.qualsJSON));
  var values = Object.keys(fieldValues).map(key => fieldValues[key]);
  return values;
 }
 sortByName(){
   if(this.state.flag === "" || this.state.flag === "DSC" ){
   this.setState({qualities:this.extract().sort(function(a,b){
     return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0));
   }),flag:"ASC"});
   }else{
     this.setState({qualities:this.extract().sort(function(a,b){
       return ((a.name > b.name) ? -1 : ((a.name < b.name) ? 1 : 0));
     }),flag:"DSC"});
   }
 }
 sortByScore(){
   if(this.state.ord === "" || this.state.ord === "HTL"){
   this.setState({qualities:this.extract().sort(function(a,b){
      return (a.score - b.score);
   }),ord:"LTH"});}else{
     this.setState({qualities:this.extract().sort(function(a,b){
        return ( b.score - a.score);
     }),ord:"HTL"});
   }
 }
  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <h2>
            Creative Qualities
          </h2>
            <div>
              <button onClick={()=>this.sortByName()}>Sort By Name</button>
              <button onClick={()=>this.sortByScore()}>Sort By Score</button>
            </div>
            <div className="row">
              { this.state.qualities.map((obj) => {
                return (
                  <div className="col-md-4">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        { obj.name}
                      </div>

                      <div className="panel-body">

                        <h4>
                          <Description content = { obj.description }/>
                        </h4>

                        <hr></hr>
                        <p>
                          <strong>Your Score: {obj.score}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                );})
              }
            </div>
        </div>
      </div>
    );
  }
}

export default App
