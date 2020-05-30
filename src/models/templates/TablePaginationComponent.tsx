import React, {ChangeEvent} from "react";
import {IconButton, TablePagination, TableRow} from "@material-ui/core";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";

interface TablePaginationComponentProps {
    numberOfRows: number,
    changeRowsPerPage: (rowsPerPage: number) => void,
    changePage: (page: number) => void
}

interface TablePaginationComponentState {
    count: number,
    page: number,
    rowsPerPage: number
}

type State = TablePaginationComponentState;
type Props = TablePaginationComponentProps

export default class TablePaginationComponent extends React.Component<Props, State> {

    componentWillMount(): void {

        this.setState({
            count: this.props.numberOfRows,
            page: 0,
            rowsPerPage: 10,
        });
    }

    tablePaginationActions = (state: State) => {

        const { count, page, rowsPerPage} = state;

        const handleBackButtonClick = () => {
            this.setState({
                page: page - 1
            })
            this.handleChangePage(page - 1);
        };

        const handleNextButtonClick = () => {
            this.setState({
                page: page + 1
            })
            this.handleChangePage(page + 1);
        };

        return (
            <div style={{display:'flex'}}>
                <IconButton onClick={handleBackButtonClick} disabled={page === 0}>
                    <KeyboardArrowLeft />
                </IconButton>
                <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1}>
                    <KeyboardArrowRight />
                </IconButton>
            </div>
        );
    }

    handleChangePage = (page: number) => {
        this.props.changePage(page);
    };

    handleChangeRowsPerPage = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement> ) => {
        this.setState({
            rowsPerPage: parseInt(e.target.value),
            page: 0
        });

        this.props.changeRowsPerPage(parseInt(e.target.value));
    };

    render(): React.ReactNode {

        return (
            <TableRow>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    count={this.state.count}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                    }}
                    onChangePage={(e: any, page: number) => console.log("fasdf")}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    ActionsComponent={this.tablePaginationActions}
                />
            </TableRow>
        );
    }
}