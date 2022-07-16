import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function SalesCard(){
    
    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());
    
    
    return(

        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title"></h2>
            <div>
                <DatePicker 
                selected={minDate} // Vai pegar a data atual
                onChange={(date: Date) => setMinDate(date)}
                className="dsmeta-form-control"
                dateFormat="dd/MM/yyyy"
                />
                <DatePicker 
                selected={maxDate}
                onChange={(date: Date) => setMaxDate(date)}
                className="dsmeta-form-control"
                dateFormat="dd/MM/yyyy"
                />
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>

        </div>
       
    );
}
export default SalesCard;