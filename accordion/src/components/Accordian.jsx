import { data } from "./Data";
import Ui from "./Ui";

const Accordion = () => {

    console.log(data);
    return (
        <div>
            {
                data.map((currEle, index) => {
                    // console.log(currEle);
                    return <Ui key={index} currEle={currEle}/> 
                })
            }
        </div>
    )
}


export default Accordion;