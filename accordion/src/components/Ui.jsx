import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

export default function Ui({currEle}) {

    const [data, setData] = useState(false);

    const showHide = () => {
        //id data is true then do false and vice versa
        setData(!data);
    }

    return (
        <div>
            <div>
                <button onClick={showHide}>{data ? "-" : "+"  }</button>
                <h3>{currEle.que}</h3>
            </div>
            {/* show nothing when data is false and vice-versa */}
            <p>{ data ? currEle.ans : "" }</p>
        </div>
    )
}