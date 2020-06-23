export const borrarCookies = (nombre: string) => {

    fetch('/eliminarTodasLasCookies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nombre})
    });
}