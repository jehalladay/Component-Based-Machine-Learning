import {spawn} from 'child_process';

function py(file) {
    console.assert(typeof(file) === 'string')
    const path = `${this.config.PYTHON_PATH}${file}`
    return async (data)=>{
        const calling = new Promise(function (resolve, reject) {
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
        const out = await calling
        return out
    }
}

export { py }
