import React, { Component } from 'react';
import Deco from "./deco"

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            current: 1,
            change: "right"
         };
         this.leftArrow = this.leftArrow.bind(this);
         this.rightArrow = this.rightArrow.bind(this);
    }

    leftArrow(){
        console.log(this.state.current);
        var  val = this.state.current;
        val--;
        if(val > 0){
            this.setState({
                current: val
            })
            var bl = document.getElementById("arrow-left-btn");
            var prev = document.getElementById("feedback-"+(val+1));
            var main = document.getElementById("feedback-"+val);
            prev.style.opacity = 0;
            setTimeout(() => {  main.style.opacity = 1; }, 500);
            var bl = document.getElementById("arrow-right-btn");
            bl.style.opacity = 1;
            if(val == 1){
                var bl = document.getElementById("arrow-left-btn");
                bl.style.opacity = 0;
                this.setState({
                    change : "right"
                });
            }
        }
    };
    
    rightArrow(){
        console.log(this.state.current);
        var val = this.state.current;
        val++;
        if(val <= 6){
            this.setState({
                current: val
            })
            var bl = document.getElementById("arrow-left-btn");
            var br = document.getElementById("arrow-right-btn");
            var prev = document.getElementById("feedback-"+(val-1));
            var main = document.getElementById("feedback-"+val);
            bl.style.opacity = 1;
            prev.style.opacity = 0;
            
            setTimeout(() => {  
                main.style.opacity = 1; 
            }, 500);
            if(val == 6){
                var br = document.getElementById("arrow-right-btn");
                br.style.opacity = 0;
                this.setState({
                    change : "left"
                });
            }
        }
    };

    render() { 
        return (
            <div id="feedback-container">
                <h2 className="work-main-text">A payments experience people<br/>love to talk about</h2>
                <div className="feature-hr mt-4 mb-0"/>
                <div id="feedback-deco1">
                    <Deco color="#f2f2f2"/>
                </div>
                <a onClick={ this.state.change ==="right"?  this.rightArrow : this.leftArrow}>
                    <div id="feedback-card-container">
                        <div id="feedback-1" className="feedback-card">
                            <div>Razorpay Payment Links made our reconciliations super smooth</div>
                            <div>Teams across the organization found sending payment links through Razorpay an easy task. Finance teams could tag every payment made to the sales user, making reconciliations very smooth. The overall experience using Razorpay Payment Links has been very good.</div>
                            <div>Dhivya Ravi,<br/>AGM, Goomo</div>
                        </div>
                        <div id="feedback-2" className="feedback-card">
                            <div>Helped us reduce outstandings by 18%</div>
                            <div>By using the card tokenization feature on Razorpay Subscriptions, we were able to eliminate up-front deposits for a majority of our customers. This helped us reduce outstandings by 18% and improved our retention numbers, as more customers were able to afford the product.</div>
                            <div>Aravind Radhakrishnan,<br/>Product Director, Zoomcar</div>
                        </div>
                        <div id="feedback-3" className="feedback-card">
                            <div>Custom branded pages with zero integration</div>
                            <div>During the Kerala floods last year, as a responsible brand we wanted to enable our consumers to donate to relief funds. We needed an instant and sustainable solution. With Razorpay Payment Pages, we were able to quickly create a page with no integration efforts. We look forward to more successes in the future.</div>
                            <div>Sankshep Malhotra,<br/>Principal Product Manager, Swiggy</div>
                        </div>
                        <div id="feedback-4" className="feedback-card">
                            <div>Razorpay Payment Links made our reconciliations super smooth</div>
                            <div>Teams across the organization found sending payment links through Razorpay an easy task. Finance teams could tag every payment made to the sales user, making reconciliations very smooth. The overall experience using Razorpay Payment Links has been very good.</div>
                            <div>Dhivya Ravi,<br/>AGM, Goomo</div>
                        </div>
                        <div id="feedback-5" className="feedback-card">
                            <div>0% downtime in transactions with Razorpay</div>
                            <div>Razorpay offered excellent technological innovation, pricing model and, security to our high-value transactions. The integration was flawless and easy. Later, we piloted our high-value transactions on Razorpay for 30 days and observed 100% efficient systems with 0% downtime on our national international transactions.</div>
                            <div>Raghav Belavadi,<br/>Founder and CEO, Hype</div>
                            </div>
                        <div id="feedback-6" className="feedback-card">
                            <div>90% effort reduction to reconcile failed payments</div>
                            <div>RazorpayX has helped us achieve a 35% higher success rate, and a 90% reduction in time taken to reconcile failed payments. Additionally, we’ve also seen a 80% reduction in customer support tickets. RazorpayX has become our primary disbursal system for loans, vendor payments and customer refunds.</div>
                            <div>Karan Mehta,<br/>Cofounder & CTO, Kissht</div>
                        </div>
                    </div>
                </a>
                <div id="feedback-deco2">
                    <Deco color="#f2f2f2"/>
                </div>
                <div id="arrow-container">
                    <a id="arrow-left-btn" onClick={this.leftArrow}><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></a>
                    <a id="arrow-right-btn" onClick={this.rightArrow}><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                </div>
            </div>
         );
    }
}
 
export default Feedback;