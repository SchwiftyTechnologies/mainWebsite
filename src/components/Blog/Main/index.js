import React, { Component } from "react";
import TopStories from "./TopStories";
import OtherStories from "./OtherStories";
import Nav from "../Nav";
import "../styles.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
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
                        <p>So it boils down to the final question - to buy or not to buy? While we may only be able to speculate for the time being, here's our take: </p>`,
        },
        {
          id: 11,
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
                    immensely.</p>
                    <p>ARM the new generation chip, stands for Advanced RISC Machine, these chips are known for
                    low power consumption especially for phones, tablets and smart home devices. Apple announced
                    the new Mac would come out in late 2020 with these new ARM chips.</p>
                    <p>The question that everyone is intrigued about is if these Apple Silicon chips will be as powerful
                    as intel processors, and the answer is based on Surface Pro X with an ARM chips claiming it
                    offered 3 times the performance of the intel-based Surface Pro 6.</p>
                    So, yes these new generation ARM can be a revolutionary change for Apple.`,
        },
        // {
        //     id:1,
        //     image:"https://cdn.pixabay.com/photo/2020/06/29/19/26/piano-5353974__340.jpg",
        //     heading:"sahjs sacnjksnca ajsnckancs acnas",
        //     author:"Satyansh Singh",
        //     created: "13th July 2020",
        //     text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
        // },
        // {
        //     id:2,
        //     image:"https://cdn.pixabay.com/photo/2020/07/09/09/05/cat-5386372_1280.jpg",
        //     heading:"sahjs sacnjksnca ajsnckancs acnas",
        //     author:"Satyansh Singh",
        //     created: "13th July 2020",
        //     text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
        // },
        // {
        //     id:3,
        //     image:"https://cdn.pixabay.com/photo/2020/07/05/19/28/bloom-5374310__340.jpg",
        //     heading:"sahjs sacnjksnca ajsnckancs acnas",
        //     author:"Satyansh Singh",
        //     created: "13th July 2020",
        //     text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
        // },
        // {
        //     id:4,
        //     image:"https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794__340.jpg",
        //     heading:"sahjs sacnjksnca ajsnckancs acnas",
        //     author:"Satyansh Singh",
        //     created: "13th July 2020",
        //     text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
        // },
        // {
        //     id:5,
        //     image:"https://cdn.pixabay.com/photo/2020/07/04/09/47/theater-5368958__340.jpg",
        //     heading:"sahjs sacnjksnca ajsnckancs acnas",
        //     author:"Satyansh Singh",
        //     created: "13th July 2020",
        //     text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
        // },
        // {
        //     id:6,
        //     image:"https://cdn.pixabay.com/photo/2020/07/02/08/00/panoramic-5362158__340.jpg",
        //     heading:"sahjs sacnjksnca ajsnckancs acnas",
        //     author:"Satyansh Singh",
        //     created: "13th July 2020",
        //     text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
        // },
        // {
        //     id:7,
        //     image:"https://cdn.pixabay.com/photo/2020/06/24/17/24/ruin-5337039__340.jpg",
        //     heading:"sahjs sacnjksnca ajsnckancs acnas",
        //     author:"Satyansh Singh",
        //     created: "13th July 2020",
        //     text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
        // },
        // {
        //     id:8,
        //     image:"https://cdn.pixabay.com/photo/2020/05/28/15/15/smartphone-5231499__340.jpg",
        //     heading:"sahjs sacnjksnca ajsnckancs acnas",
        //     author:"Satyansh Singh",
        //     created: "13th July 2020",
        //     text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
        // },
        // {
        //     id:9,
        //     image:"https://cdn.pixabay.com/photo/2020/07/05/05/53/bridge-5371794__340.jpg",
        //     heading:"sahjs sacnjksnca ajsnckancs acnas",
        //     author:"Satyansh Singh",
        //     created: "13th July 2020",
        //     text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
        // },
        // {
        //     id:10,
        //     image:"https://cdn.pixabay.com/photo/2020/07/07/10/22/melbourne-5380024__340.jpg",
        //     heading:"sahjs sacnjksnca ajsnckancs acnas",
        //     author:"Satyansh Singh",
        //     created: "13th July 2020",
        //     text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
        // },
        // {
        //     id:11,
        //     created:"3 November 2020",
        //     author:"Satyansh Singh",
        //     image:"https://cdn.pixabay.com/photo/2020/07/08/07/19/hover-fly-5382916_1280.jpg",
        //     heading:"Modern loneliness: Musician Lauv wants to help you find peace of mind in a difficult time",
        //     text:`<p>Apple has done it again, with their latest bold move to remove their chargers from their upcoming iPhone 12's box. This is according to a note written by analyst Ming-Chi Kuo, who has a near perfect track record when it comes to his predictions about Apple products. He reasons that this move would offset the considerably higher production costs of the iPhone 12 (which is to be supported by 5G), thus enabling them to retail it at a similar price to the iPhone 11.</p>
        //     <p>Naturally, this has left the Apple fan-base polarized with opinions ranging from approbation for efforts to reduce e-waste to complaints about getting lesser for money being paid.
        //     Let's take a moment to review both sides of the buck.</p>
        //     <p>One way to look at it is how this corroborates to Apple's intention to reduce e-waste. According to one source, e-waste from Apple's in-box chargers estimates to about 300,000 tons. While this may actually reduce the amount of e-waste, as Apple will most likely tout decision, one cannot ignore this to be a strategic move towards the elimination of ports entirely, to wireless charging, as rumored for the iPhone 13.</p>
        //     <p>On the other hand, critics are dismissing it as a marketing strategy by giving the customers less for the same cost. Furthermore, the more upscale iPhone 12 models may have larger batteries which may not be optimally charged by the current 5W Apple chargers, thereby compelling customers to buy the new 20W adapters.</p>
        //     <p>So it boils down to the final question - to buy or not to buy? While we may only be able to speculate for the time being, here's our take: </p>`
        // }
      ],
    };
  }

  render() {
    let top = this.state.data.slice(0, 4);
    let other = this.state.data.slice(4);
    var stories = [];
    stories.push(<Nav />);
    if (this.state.data.length <= 4) {
      stories.push(
        <div
          id="main-body-container"
          className="d-flex flex-column align-items-center"
        >
          <TopStories data={top} />
        </div>
      );
    } else {
      stories.push(
        <div
          id="main-body-container"
          className="d-flex flex-column align-items-center"
        >
          <TopStories data={top} />
          <h1 className="text-center mt-5 pt-2 text-danger">
            <strong>OTHER STORIES</strong>
          </h1>
          <OtherStories data={other} />
        </div>
      );
    }
    return <React.Fragment>{stories}</React.Fragment>;
  }
}

export default Main;
