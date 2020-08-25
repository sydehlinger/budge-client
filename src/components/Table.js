import React from "react";
import Form from "react-bootstrap/esm/Form";

export default class Table extends React.Component {

    renderTableHeader() {
        let header = Object.keys(this.props.data[0])
        return header.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }


    renderTableData() {
        return this.props.data.map((transaction, index) => {
            console.log(transaction.key);
            const {Amount, Date, Description, Location, Payee, Subcategory} = transaction
            return (
                <tr key={index}>
                    <td>{transaction['Master Category']}</td>
                    <td>{Subcategory}</td>
                    <td>{Date}</td>
                    <td>{Location}</td>
                    <td>{Payee}</td>
                    <td>{Description}</td>
                    <td>{transaction['Payment Method']}</td>
                    <td>{Amount}</td>
                    <td>
                        <Form>
                            <Form.Row className="align-items-center">
                                <Form.Control
                                    as="select"
                                    className="mr-sm-2"
                                    id="inlineFormCustomSelect"
                                    custom
                                >
                                    <option value="0">Category</option>
                                    <option value="1">Rent</option>
                                    <option value="2">Parents</option>
                                    <option value="3">Utilities</option>
                                    <option value="4">Emergency Fund</option>
                                    <option value="5">Groceries</option>
                                    <option value="6">Gas</option>
                                    <option value="7">Fern</option>
                                    <option value="8">Eating Out</option>
                                    <option value="9">Fun</option>
                                    <option value="10">Other</option>
                                </Form.Control>
                            </Form.Row>
                        </Form>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        {this.renderTableHeader()}
                        <th key='category'>Category</th>
                    </tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>

        );
    }
}