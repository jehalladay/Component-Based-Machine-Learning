import {spawn} from 'child_process';

class Py {
    constructor(file) {
        console.assert(typeof(file) === 'string')
        this.path = `${this.config.PYTHON_PATH}${file}`
    
    

    }



    return (data)=>{


        return new Promise(function (resolve, reject) {

            const Py = spawn('python', [path]);
            var dataString = '';

            Py.stdout.on('data', function(d){
                dataString += d.toString();
            });
            Py.stdout.on('end', function(){
                resolve(dataString);
            });
            process.on('error', function (err) {
                reject(err);
            });
            Py.stdin.write(JSON.stringify(data));
            Py.stdin.end();
        })
    }
}

export { py }
