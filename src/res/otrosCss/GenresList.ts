//Sirve también para los editores

export const gridContainer = {
    width: '100%',
    margin: '3px',
};

export const gridItem = (img: string) => {

    return {
        display: 'flex',
        backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.1), rgb(32, 32, 32) 100%), url(${img})`,
        borderRadius: '10px',
        marginLeft: '7px',
        marginRight: '7px',
        marginBottom: '10px',
        maxWidth: '32%',
        height: '200px',
        boxShadow: '2px 0 7px rgba(0, 0, 0, .5)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        alignItems: 'center'
    }
};