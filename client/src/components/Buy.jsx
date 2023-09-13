import {ethers} from "ethers";
import "./Buy.css";

const Buy =({state})=>{
    const buyChai=async(event)=>{
       event.preventDefault();
       const {contract}=state;
       const name =document.querySelector("#name").value;
       const message =document.querySelector("#message").value;

       const amount ={value:ethers.utils.parseEther("0.0001")};
       const transaction = await contract.buychai(name,message,amount);
       await transaction.wait();
       alert("Transaction is successul");
       window.location.reload();
    }
    return (
            <div className="center">
             <h2>Welcome</h2>
              <form onSubmit={buyChai}>
                <div className="inputbox">
                  <input type="text" required="required" id="name" />
                  <span>Name</span>
                </div>
                <div className="inputbox">
                  <input type="text" required="required" id="message" />
                  <span>Message</span>
                </div>
                <div className="inputbox">
                  <input type="submit" value="Pay"  disabled={!state.contract}/>
                </div>
              </form>
                
              </div>
            );
    
}

export default Buy;

