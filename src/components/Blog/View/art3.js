import React, { Component } from "react";
import Nav from "../Nav";
import { isMobile } from "react-device-detect";
class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: 1,
        image:
          "https://cdn.techlatest.in/wp-content/uploads/2020/07/Asus-ROG-Phone-3-Launched-1-e1595476287254.jpg",
        heading:
          "ASUS ROG PHONE 3 : The King of Gaming Smartphones",
        author: "Ananya Gulati and Shriram Chenniappa",
        created: "30th July 2020",
        text: `<p>In 2018, ASUS launched their first gaming smartphone named ROG phone. This phone for the
        come had a no-compromise philosophy towards its features. The design for ASUS ROG Phone
        3 compared to last year’s, the rear is still made of glass, but the cover takes up less space. The
        display, has a large 6.59″ AMOLED display at 2340×1080 resolution for a 19.5:9 aspect ratio.
        The Gaming on the ASUS ROG Phone with the X-Mode this level of customization will feel right
        at home for those who have tinkered with custom kernels from their forums.</p>
        
        <p>Here’s a list of what you can do with Game Genie:
          <ul>
            <li> You can disable distractions by blocking notification and phone call alerts. You can
            even go “data-only” to completely disable incoming phone calls which may otherwise
            cause network disruptions during gameplay.</li>
            <li> You can quickly adjust or lock the brightness level without pulling down the status bar
            (exiting Immersive Mode can mess with the UI of some games ).</li>
            <li> You can toggle the refresh rate.</li>
            <li> You can record a short 5, 10, 20, or 30-second video clip with the floating “marked clip”
            button.</li>
            <li> You can launch ZenUI/ROG UI’s screen recorder overlay for longer video recordings.</li>
            <li> You can show a floating overlay with real-time CPU usage, GPU usage, battery level,
            battery temperature, and optionally the current FPS and/or the remaining battery life
            estimate.</li>
            <li> You can tap the “speed up” button to clear background processes (free up RAM).</li>
            <li> You can record a macro that mimics your inputs and plays them back.</li>
            <li> You can show a customizable crosshair for games that don’t show them by default,
            such as in third-person mode in PUBG Mobile.</li>
            <li> You can lock the screen for when you need to make sure nothing changes in-game
            without your input.
            <li> You can start live streaming on YouTube (Twitch used to be an option but was recently
            removed) at up to 1080p resolution if you connect your account in settings.</li>
            <li> You can add a few apps to a list that you want to later open in a floating window
            without exiting the game.</li>
            <li> You can launch a search overlay to quickly search the web for videos and other content
            relevant to the game you’re in.</li>
            <li> Finally, you can set up the AirTrigger gestures for the game you’re playing.</li>
          </ul>
        </p>
        
        <p>The AndroBench results show that the ROG Phone 3’s sequential read, sequential write,
        random read, and random write speeds are noticeably higher than the Snapdragon 865
        Qualcomm Reference Device (QRD). The difference in sequential read speed is about 200MB/s
        while the difference in sequential write speeds is about 500MB/s. The random read and write
        speeds are about 50MB/s and 60MB/s higher respectively on the ROG Phone 3 compared to
        the QRD. My ROG Phone 3 has a 512GB UFS 3.1 storage chip while the QRD had a UFS 3.0
        storage chip, for reference.</p>
        
        <p>You can buy the 12GB + 512GB variant of the ROG Phone 3 for €999. The 16GB + 512GB
        variant of the device costs €1099. The 8GB + 256GB Strix Edition, which comes with the
        Snapdragon 865 and not the 865 Plus, costs €799</p>`,
      }
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
