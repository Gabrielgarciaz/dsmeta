import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function SalesCard(){
    return(

        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title"></h2>
            <div>
                <DatePicker selected={new Date()}
                onChange={(date: Date) => {}}
                className="dsmeta-form-control"
                dateFormat="dd/MM/yyyy"
                />
                <DatePicker selected={new Date()}
                onChange={(date: Date) => {}}
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