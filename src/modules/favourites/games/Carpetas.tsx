// Import React as usual
import React from 'react';

// Import Chonky
import 'chonky/style/main.css';
import {FileBrowser, FileView} from 'chonky';
import history from "../../../history";
import {Link, Modal} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/metroui.css';

interface CarpetasProps {
    modificarFavoritos: (lista: any[]) => void,
    datos: any[],
    tipo: string
}

interface State {
    currentFolderId: string,
    fileMap: any[],
    currentFolder: any,
    open: boolean
}

export default class Carpetas extends React.Component<CarpetasProps, State> {

    componentWillMount(): void {
        this.setState({
            currentFolderId: this.props.datos[0].id,
            fileMap: this.props.datos,
            currentFolder: this.props.datos[0],
            open: false
        })
    }

    shouldComponentUpdate(nextProps: Readonly<CarpetasProps>, nextState: Readonly<State>, nextContext: any): boolean {
        this.props.modificarFavoritos(nextState.fileMap);
        return true;
    }

    handleFileOpen = (file: any) => {
        if (file.isDir) {
            this.setState({currentFolderId: file.id, currentFolder: file});
        } else {
            if (this.props.tipo === "videojuegos") {
                history.push(`/videojuegos/${file.id}`);
            }
            else {
                //abrir una nueva pestaña con la web
                console.log("hehehe")
            }

        }
    };

    handleFolderCreate = () => {
        this.setState({open: true});
    };

    onFormSubmit = (e: any) => {
        e.preventDefault();

        // @ts-ignore
        if (document.getElementById("carpeta").value !== "") {

            let estaCarpeta = false;

            this.state.fileMap.forEach((file: any) => {
                // @ts-ignore
                if (file.id === document.getElementById("carpeta").value) {
                    estaCarpeta = true;
                }
            })

            if (!estaCarpeta) {
                const directorio = {
                    //@ts-ignore
                    id: document.getElementById("carpeta").value,
                    //@ts-ignore
                    name: document.getElementById("carpeta").value,
                    isDir: true,
                    thumbnailUrl: null,
                    childrenIds: [this.state.currentFolderId],
                    parentId: this.state.currentFolderId
                };

                let copiaFileMap = this.state.fileMap;
                let padre = this.state.currentFolder;
                padre.childrenIds.push(directorio.id);
                let archivos = [...copiaFileMap, directorio];

                this.setState({fileMap: archivos, open: false});
            }
            else {
                // @ts-ignore
                new Noty({text: `El nombre ${document.getElementById("carpeta").value} ya está en uso.`, type: 'error', theme: 'metroui', timeout: 3000, layout: "topRight"}).show();
            }

        }
        else {
            new Noty({text: "El nombre de la carpeta no puede estar vacio.", type: 'error', theme: 'metroui', timeout: 3000, layout: "topRight"}).show();
        }
    }

    //Borrar de uno en uno o hacer llamada y que borre lo que no se puede alcanzar
    handleDeleteFiles = (files: any[], inputEvent: any) => {

        let copiaFileMap = this.state.fileMap;

        files.forEach((file: any) => {

            if(file.id === this.state.currentFolder.parentId) {
                new Noty({text: "Esta carpeta no se puede eliminar.", type: 'error', theme: 'metroui', timeout: 3000, layout: "topRight"}).show();
            }
            else {

                copiaFileMap.forEach((archivo: any) => {

                    if(file.parentId === archivo.id) {
                        archivo.childrenIds.splice(archivo.childrenIds.indexOf(file.id), 1);
                    }
                })
                
                copiaFileMap.splice(copiaFileMap.indexOf(file), 1);
            }
        })

        let archivos = [...copiaFileMap];
        this.setState({fileMap: archivos});
    };

    handleMovesFiles = (files: any[]) => {

        let copiaFileMap = this.state.fileMap;
        let carpetaDestino: any = null;
        let archivosMover: any[] = [];
        let idArchivosMover: any[] = [];

        files.forEach((file: any) => {

            if (file.isDir) {
                carpetaDestino = file;
            }
            else {
                archivosMover.push(file);
            }
        })

        archivosMover.forEach((archivo: any) => {

            copiaFileMap.forEach((file: any) => {

                if(archivo.parentId === file.id) {
                    file.childrenIds.splice(file.childrenIds.indexOf(archivo.id), 1);
                }
            })

            copiaFileMap[copiaFileMap.indexOf(archivo)].parentId = carpetaDestino.id;
            idArchivosMover.push(archivo.id);
        })

        copiaFileMap[copiaFileMap.indexOf(carpetaDestino)].childrenIds = copiaFileMap[copiaFileMap.indexOf(carpetaDestino)].childrenIds.concat(idArchivosMover);

        let archivos = [...copiaFileMap];
        this.setState({fileMap: archivos});
    }

    thumbnailGenerator = (file: any) => {
        return file.thumbnailUrl;
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    renderizarModal = (open: boolean) => {
        return (
            <Modal
                open={open}
                onClose={this.handleClose}
                className="Modal"
                disableAutoFocus
                disableEnforceFocus
            >
                <Alert className="alerta" variant="filled" severity="info" icon={false}>
                    <CreateNewFolderIcon className="icono"/>
                    <p>Introduce el nombre de la carpeta</p>
                    <div>
                        <form onSubmit={this.onFormSubmit}>
                            <input type="text" className="input" id="carpeta" autoComplete="off"/>
                            <br/>
                            <button className="boton" type="submit">Enviar</button>
                        </form>
                    </div>
                </Alert>
            </Modal>
        );
    }

    render() {

        const folder = this.state.currentFolder;

        const folderChain = [];
        let files: any[] | undefined = [];
        if (folder) {
            let currentFolder = folder;
            while (currentFolder) {
                folderChain.unshift(currentFolder);
                const parentId = currentFolder.parentId;
                currentFolder = null;

                this.state.fileMap.forEach((file: any) => {

                    if(file.id === parentId) {
                        currentFolder = file;
                    }
                })
            }
            if (folder.childrenIds) {
                folder.childrenIds.forEach((id: string) => {

                    this.state.fileMap.forEach((file: any) => {

                        if(id === file.id) {
                            // @ts-ignore
                            files.push(file)
                        }
                    })
                });
            }
        }

        return (
            <div style={{height: 750, width: '100%'}}>
                {this.renderizarModal(this.state.open)}
                <FileBrowser files={files} folderChain={folderChain} thumbnailGenerator={this.thumbnailGenerator}
                             onFileOpen={this.handleFileOpen} onFolderCreate={this.handleFolderCreate}
                             onDownloadFiles={this.handleMovesFiles} onDeleteFiles={this.handleDeleteFiles}
                             fillParentContainer={true} view={FileView.SmallThumbs}/>
            </div>
        );

    }
}