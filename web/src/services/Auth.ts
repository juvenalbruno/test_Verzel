export const isAuth = () => {
    const token = sessionStorage.getItem('Token');

    if (token)
        return true;
        
}