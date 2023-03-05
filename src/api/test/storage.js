const isAuthenticated = ()=> {
    return (localStorage.getItem("access") !== null)
};

const handleSignOut = () => {
    localStorage.removeItem("access");
};