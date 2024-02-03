const JwtService = {
    getUserIdFromToken: () => {
        const jwtToken = localStorage.getItem('jwt');

        if (jwtToken) {
            try {
                const decodedToken = atob(jwtToken.split('.')[1]);
                const tokenData = JSON.parse(decodedToken);

                return tokenData.userId;
            } catch (error) {
                console.error('Error decoding JWT token:', error);
                return null; 
            }
        } else {
            console.warn('JWT token not found in localStorage');
            return null;
        }
    }
}
export default JwtService