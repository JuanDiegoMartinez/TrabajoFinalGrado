import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grouped from "./Grouped";
import Chips from "./Chips";
import {desarrolladores, generos, plataformas} from "../../../models/data/Datos";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

interface SimpleTabsProps {
    pestanaActual: number,
    seleccionado: string,
    onFilterSubmit: (pestanaActual: number | undefined, seleccionado: string | undefined) => void
}

interface SimpleTabsState {
    pestanaActual: number,
    seleccionado: string
}

export default class Pestanas extends React.Component<SimpleTabsProps, SimpleTabsState> {

    componentWillMount(): void {

        const {pestanaActual} = this.props;

        let actual = pestanaActual === undefined ? 0 : pestanaActual;

        this.setState({
            pestanaActual: actual,
            seleccionado: this.props.seleccionado
        })
    }

    //Se ejecuta cuando se reciben props
    componentWillReceiveProps(props: Readonly<SimpleTabsProps>): void {

        const {pestanaActual} = props;

        let actual = pestanaActual === undefined ? 0 : pestanaActual;

        this.setState({
            pestanaActual: actual,
            seleccionado: this.props.seleccionado
        })
    }

    handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        this.setState({
            pestanaActual: newValue,
            seleccionado: this.props.seleccionado
        })
    };

    render(): React.ReactNode {

        return (
            <div style={{marginBottom: '40px', backgroundColor: 'white'}}>
                <AppBar position="static">
                    <Tabs value={this.state.pestanaActual} onChange={this.handleChange} aria-label="simple tabs example" centered>
                        <Tab label="Genero"/>
                        <Tab label="Plataforma"/>
                        <Tab label="Desarrolladores"/>
                    </Tabs>
                </AppBar>
                <TabPanel value={this.state.pestanaActual} index={0}>
                    <Chips seleccionado={this.props.seleccionado} onFilterSubmit={this.props.onFilterSubmit} datos={generos} pestana={0}/>
                </TabPanel>
                <TabPanel value={this.state.pestanaActual} index={1}>
                    <Chips seleccionado={this.props.seleccionado} onFilterSubmit={this.props.onFilterSubmit} datos={plataformas} pestana={1}/>
                </TabPanel>
                <TabPanel value={this.state.pestanaActual} index={2}>
                    <Grouped seleccionado={this.props.seleccionado} onFilterSubmit={this.props.onFilterSubmit} datos={desarrolladores} pestana={2}/>
                </TabPanel>
            </div>
        );
    }
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
