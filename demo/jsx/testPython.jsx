import { spawn } from 'child_process'

const Py    = spawn('python', ['../python/demo.py']),
    data = [1,2,3,4,5,6,7,8,9];
var dataString = '';

Py.stdout.on('data', function(data){
  dataString += data.toString();
});
Py.stdout.on('end', function(){
  console.log('Sum of numbers=',dataString);
});
Py.stdin.write(JSON.stringify(data));
Py.stdin.end();