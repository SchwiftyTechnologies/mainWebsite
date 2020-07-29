import React, { Component } from "react";
import Nav from "../Nav";
import { isMobile } from "react-device-detect";
class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: 12,
        image:
          "https://firebasestorage.googleapis.com/v0/b/badmintonproject-3701e.appspot.com/o/Your%20iPhone%20may%20no%20longer%20come%20with%20a%20charger-1.png?alt=media&token=77dd7fe0-d04e-4321-b9a0-4c26347005c4",
        heading: "Your iPhone may no longer come with a charger",
        author: "Ananya Rajagopal & Shriram Chenniappa",
        created: "21st July 2020",
        text: `<p>Apple has done it again, with their latest bold move to remove their chargers from their upcoming iPhone 12's box. This is according to a note written by analyst Ming-Chi Kuo, who has a near perfect track record when it comes to his predictions about Apple products. He reasons that this move would offset the considerably higher production costs of the iPhone 12 (which is to be supported by 5G), thus enabling them to retail it at a similar price to the iPhone 11.</p>
        <p>Naturally, this has left the Apple fan-base polarized with opinions ranging from approbation for efforts to reduce e-waste to complaints about getting lesser for money being paid.          
        Let's take a moment to review both sides of the buck.</p>
        <p>One way to look at it is how this corroborates to Apple's intention to reduce e-waste. According to one source, e-waste from Apple's in-box chargers estimates to about 300,000 tons. While this may actually reduce the amount of e-waste, as Apple will most likely tout decision, one cannot ignore this to be a strategic move towards the elimination of ports entirely, to wireless charging, as rumored for the iPhone 13.</p>
        <p>On the other hand, critics are dismissing it as a marketing strategy by giving the customers less for the same cost. Furthermore, the more upscale iPhone 12 models may have larger batteries which may not be optimally charged by the current 5W Apple chargers, thereby compelling customers to buy the new 20W adapters.</p>
        <p>So it boils down to the final question - to buy or not to buy? While we may only be able to speculate for the time being, here's our take:<br/> With iPhones consistently having the same type of charging port for several generations usually would mean that hard core iPhone users would already have one or even two chargers with them already. They would generally throw out the old one to give way for their shiny new charger. Moreover, Apple's included chargers have slower charging speeds, they employ this tactic so that people would have to pay extra for faster charging, because of this people may never actually use the charger included in the box. Even though this looks like Apple is just trying to make a quick buck by not including the charger, there may actually be a bigger cause they are fighting towards. Apple has always made sure customers know that their products are made out of recycled materials. This ofcourse is a HUGE DEAL, and they truly are on a mission for more sustainable future. Atleast, that is what they want us to believe, Apple being Apple, we can never know their true intentions. All we can do is marvel at the amazing technology they provide to their consumers and cherish the moments when we use them. </p>`,
      },
    };
  }
  componentDidMount() {
    var content = document.getElementById("blog-view-content");
    content.innerHTML = this.state.data.text;
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="d-flex flex-column align-items-center">
          <div
            id="blog-image-container"
            className="d-flex flex-column justify-content-end"
            style={{
              backgroundImage: `url(${this.state.data.image})`,
              width: "100%",
              height: isMobile ? "75vh" : "94vh",
              overflow: "hidden",
              backgroundSize: isMobile ? "185%" : "cover",
              backgroundPosition: "center",
              marginTop: "7vh",
            }}
          >
            <div id="blog-view-heading">
              {this.state.data.heading}
              <div>
                <small>
                  <i>
                    {this.state.data.author}, {this.state.data.created}
                  </i>
                </small>
              </div>
            </div>
          </div>
          <div
            id="blog-view-content"
            className="container py-4 px-4 px-sm-1 d-flex flex-column"
          ></div>
        </div>
      </React.Fragment>
    );
  }
}
export default View;
