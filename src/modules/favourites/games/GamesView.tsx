import React from "react";
import 'chonky/style/main.css';
import {FileBrowser, FileView} from 'chonky';
import Container from "@material-ui/core/Container";
import history from "../../../history";



export default class GamesView extends React.Component<{}, {}> {


    render(): React.ReactNode {

        const handleSelectionChange = (selection: any) => {
            console.log(selection);
            let count = 0;
            for (const id in selection) {
                if (selection[id] !== true) continue;
                count++;
            }
            console.log(count);
        };

        // Define a handler for "open file" action
        const handleFileOpen = (file: any) => {
            console.log(file);
            //history.push("/");
        };

        // Define some files and folders
        const readmeFile = {
            id: 'readme',
            name: 'README.md',
            isDir: false,
            thumbnailUrl: "https://i.blogs.es/4950d4/sps51/450_1000.jpeg"
        };
        const directorio = {
            id: 'dir',
            name: 'directorio',
            isDir: true,
        }

        const myFiles = [readmeFile, directorio];
        const parentFolder = {
            id: 'qwer5678',
            name: 'qwer5678',
            isDir: true,
        };
        const folderChain = [parentFolder];

        const thumbnailGenerator = (file: any) => {
            return file.thumbnailUrl;
        };

        return (
            <Container maxWidth="md" className="container">
                <div className="div">
                    <FileBrowser
                        files={myFiles}
                        folderChain={folderChain}
                        onFileOpen={handleFileOpen}
                        view={FileView.SmallThumbs}
                        thumbnailGenerator={thumbnailGenerator}
                        onSelectionChange={handleSelectionChange}
                        onDeleteFiles={() => console.log("borrado")}
                        onMoveFiles={() => console.log("move")}
                        onDownloadFiles={(file: any) => console.log(file)}
                    />
                </div>
            </Container>
        )
    }
}