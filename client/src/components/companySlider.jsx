import React from 'react';
import './slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../images/logo1.png';



var images = [{imag:logo1,name:"Adani"},
               {imag:logo1,name:"Ambani"},
               {imag:logo1,name:"Goenka"},
               {imag:logo1,name:"Binod"},
               {imag:logo1,name:"Rajkumar"},
               {imag:logo1,name:"Shambhu"},
               {imag:logo1,name:"Surya"}];

class CompanySlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      fadedleft: true,
      fadedright: false,
      start: 0,
      finish: 5
    }
  }
  leftClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (start > 0 && finish > 0) {
      this.setState({
        start: start - 1,
        finish: finish - 1,
      });
    } else {
      this.setState({
        fadedleft: true
      });
    }
    this.setState({
      fadedright: false
    })
  }
  rightClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (finish < images.length) {
      this.setState({
        start: start + 1,
        finish: finish + 1
      });
    } else {
      this.setState({
        fadedright: true
      });
    }
    
    this.setState({
      fadedleft: false
    });
  }
  render() {
    var startindex = this.state.start;
    var finishindex = this.state.finish;
    const fadedleft = this.state.fadedleft ? "arrow-left faded-left flex" : " flex arrow-left";
    const fadedright = this.state.fadedright ? "flex arrow-right faded-right" : "flex arrow-right";
    return (
      <div className="partcontainer">
        <div className="slideshow row col-md-2">
          <div className={fadedleft} onClick={this.leftClick.bind(this)}></div>
          {
            this.state.images.slice(startindex, finishindex).map((image, imageindex) => {
              return (
                <div key={imageindex}>
                  <img className="pimage" src={image.imag} />
                  <p>{image.name}</p>
                </div>
              )
            })
           }
          <div className={fadedright} onClick={this.rightClick.bind(this)}></div>
        </div>
      </div>
    )
  }
};
export default CompanySlider;