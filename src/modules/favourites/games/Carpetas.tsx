// Import React as usual
import React from 'react';

// Import Chonky
import 'chonky/style/main.css';
import {FileBrowser, FileView} from 'chonky';

interface Props {}

interface State {
    currentFolderId: string,
    fileMap: any[],
    currentFolder: any
}

export default class Carpetas extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        const dir1 = {id: '1', name: 'dir1', isDir: true, childrenIds: ['2', '3']};
        const fic1 = {id: '2', name: 'fic1', isDir: false, parentId: '1'};
        const dir2 = {id: '3', name: 'dir2', isDir: true, parentId: '1', childrenIds: ['1', '4']};
        const fic2 = {id: '4', name: 'fic2', isDir: false, parentId: '3'};

        const array = [dir1, dir2, fic1, fic2];

        this.state = {currentFolderId: dir1.id, fileMap: array, currentFolder: array[0]};

    }

    handleFileOpen = (file: any) => {
        if (file.isDir) {
            this.setState({currentFolderId: file.id, currentFolder: file});
        } else {
            //console.log(file)
        }
    };

    handleFolderCreate = () => {

        const directorio = {id: "jesus", name: "dir3", isDir: true, parentId: this.state.currentFolderId};

        let copiaFileMap = this.state.fileMap;
        let padre = this.state.currentFolder;
        padre.childrenIds.push(directorio.id);
        let archivos = [...copiaFileMap, directorio];

        this.setState({fileMap: archivos});

    };

    //Borrar de uno en uno o hacer llamada y que borre lo que no se puede alcanzar
    handleDeleteFiles = (files: any[], inputEvent: any) => {

        let copiaFileMap = this.state.fileMap;

        files.forEach((file: any) => {

            if(file.id === this.state.currentFolder.parentId) {
                console.log("no se puede eliminar")
            }
            else {
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
            <div style={{height: 540}}>
                <FileBrowser files={files} folderChain={folderChain} thumbnailGenerator={this.thumbnailGenerator}
                             onFileOpen={this.handleFileOpen} onFolderCreate={this.handleFolderCreate}
                             onDownloadFiles={this.handleMovesFiles} onDeleteFiles={this.handleDeleteFiles}
                             fillParentContainer={true} view={FileView.SmallThumbs}/>
            </div>
        );
    }

}