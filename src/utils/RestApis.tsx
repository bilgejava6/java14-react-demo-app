
const port:string = '9090';

const serverName: string = 'http://localhost:'+port;

const EndPoints = {
    register: serverName + '/user/register',
    login: serverName + '/user/login'
};

export default EndPoints;