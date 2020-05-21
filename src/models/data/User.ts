//Todos los datos del usuario
export interface UserComplete {
    user: string,
    nombre: string,
    email: string,
    password: string,
    nacimiento: string,
    rutaImagen: string,
    favoritos: string[]
}

//Los datos con los cuales se registra el usuario
export interface UserRegister {
    user: string,
    nombre: string,
    email: string,
    password: string,
    nacimiento: string
}