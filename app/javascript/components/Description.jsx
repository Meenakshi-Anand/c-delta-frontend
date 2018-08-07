import React, { Component } from "react";

class Description extends Component {
  constructor(props){
    super(props);
    this.state = { showAll: false };
    this.showMore = this.showMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }

  showMore(){
    this.setState({showAll: true});
  }

  showLess(){
   this.setState({showAll: false});
   }
  render() {
  
      const {content} = this.props;
      const {showAll} = this.state;
      if(content.length<=120) {
          return <div>{content}</div>
      }
      if(showAll) {
        return <div>
              {content}
              <a onClick={()=>this.showLess()}>Read less</a>
            </div>
      }

        const toShow = content.substring(0,120)+"...";
        return <div>
            {toShow}
            <a onClick={()=>this.showMore()} >Read more</a>
            </div>

  }

}
export default Description
