import React, { Component } from "react";
import Nav from "../Nav";
import { isMobile } from "react-device-detect";
class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        // id:1,
        // author:"Satyansh Singh",
        // created: "13th July 2020",
        // image:"https://cdn.pixabay.com/photo/2020/07/08/07/19/hover-fly-5382916_1280.jpg",
        // heading:"Modern loneliness: Musician Lauv wants to help you find peace of mind in a difficult time",
        // text:`<p>Apple has done it again, with their latest bold move to remove their chargers from their upcoming iPhone 12's box. This is according to a note written by analyst Ming-Chi Kuo, who has a near perfect track record when it comes to his predictions about Apple products. He reasons that this move would offset the considerably higher production costs of the iPhone 12 (which is to be supported by 5G), thus enabling them to retail it at a similar price to the iPhone 11.</p>
        // <p>Naturally, this has left the Apple fan-base polarized with opinions ranging from approbation for efforts to reduce e-waste to complaints about getting lesser for money being paid.
        // Let's take a moment to review both sides of the buck.</p>
        // <p>One way to look at it is how this corroborates to Apple's intention to reduce e-waste. According to one source, e-waste from Apple's in-box chargers estimates to about 300,000 tons. While this may actually reduce the amount of e-waste, as Apple will most likely tout decision, one cannot ignore this to be a strategic move towards the elimination of ports entirely, to wireless charging, as rumored for the iPhone 13.</p>
        // <p>On the other hand, critics are dismissing it as a marketing strategy by giving the customers less for the same cost. Furthermore, the more upscale iPhone 12 models may have larger batteries which may not be optimally charged by the current 5W Apple chargers, thereby compelling customers to buy the new 20W adapters.</p>
        // <p>So it boils down to the final question - to buy or not to buy? While we may only be able to speculate for the time being, here's our take: </p>`,
        id: 12,
        image:
          "https://firebasestorage.googleapis.com/v0/b/badmintonproject-3701e.appspot.com/o/Untitled%20design-1.png?alt=media&token=b95ab22d-2414-49c3-b499-bb59e84f799a",
        heading:
          "MAC’s Apple Silicon Processor: A transition from Intel to Apple",
        author: "Ananya Gulati and Shriram Chenniappa",
        created: "24th July 2020",
        text: `<p>Apple recently took a decision to move away from Intel chips to its own custom Apple processor.
                These apple processors are based on the ARM designs which is already used in its iPhones and
                iPads.</p>
                <p>The reason apple is moving away from intel chips is because they claim that they produce the
                most energy-efficient chips which consumes less power and provides greater performance. Apple
                began to have dissatisfaction with Intel, as the innovation and improvement rate had decreased
                immensely. Over the last couple of years intel has been stuck on an outdated architecture, unable to make advancements , whereas their competition is making leaps and bounds
                It is not the first time Apple is making such a change, the move to Intel was considered revolutinary at the time, PowerPC just couldn't keep up with Apple's demands.</p>
                <p>Apple has and will always try to provide the best user experience for their customers, but they also would love to stick to their core design philosophy. We are all so used to the 
                sleek looking Macbooks and very few people would be against it. But in order to keep their laptops as thin as possible and also provide an effective thermal solution for, let's just be frank, Intel's oven of a CPU, Apple just couldn't do it.
                Constant user complaints of over heating Macbooks and reduced performance due to thermal throttling pushed Apple to the edge. They have already mastered making ARM chips in their iPads and iPhones, it was only a matter of time before they brought it to their laptops as well.<p/>
                <p>ARM the new generation chip, stands for Advanced RISC Machine, these chips are known for
                low power consumption especially for phones, tablets and smart home devices. Apple announced
                the new Mac would come out in late 2020 with these new ARM chips.</p>
                <p>The question that everyone is intrigued about is if these Apple Silicon chips will be as powerful
                as intel processors, and the answer is based on Surface Pro X with an ARM chips claiming it
                offered 3 times the performance of the intel-based Surface Pro 6.</p>
                So, yes these new generation ARM can be a revolutionary change for Apple. Only time will tell if this decision by Apple was a good one or not, all we can say is we are excited to see what they have in store for us.`,
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
