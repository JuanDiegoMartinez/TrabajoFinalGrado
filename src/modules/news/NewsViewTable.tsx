import React from "react";
import TableComponent from "../../models/templates/TableComponent";
import {News} from "../../models/data/News";

interface NewsViewTableProps {
    data: News[]
}

export default class NewsViewTable extends TableComponent<NewsViewTableProps> {

    renderContent(): React.ReactNodeArray {
        return this.props.data.map((object: News) => {
            return (
                <tr key={object.title} onClick={() => console.log("cambiar")}>
                    <td>{object.description}</td>
                </tr>

            );
        })
    }
}