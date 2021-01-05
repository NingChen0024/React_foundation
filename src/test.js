const https = require('https');

var options = {
  host : 'api.nasa.gov',
  port : 443,
  path : '/planetary/apod?api_key=DEMO_KEY',
  method : 'GET',
  headers : {
      'Accept' : 'application/json'
  }
};
const option = {
  hostname: 'whatever.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}


function getCountryName(code) {
    var i = 1
    var flag = true
  

        let myRequest = https.get(`https://jsonmock.hackerrank.com/api/countries?page=${i}`, resp => {

           let data = ''

            resp.on('data', (chunk) => {
              console.log("--chunk--", data.length)
              data += chunk;
            });
          
            resp.on('end', () => {
              var newData = JSON.parse(data)
              if (i <= newData.total_pages){
                i++
                newData.data.map((state) => {
                    console.log(state)
                    if (state.alpha2Code === code){
                        flag = false
                        return state.name               
                    }
                })
              }else{
                  flag = false
                  return null                
              }
            });
        })
    
    
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
}

function getTested(){

  https.request(options, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      console.log("--chunk--", data.length)
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data).explanation);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

}

function node(){
  const req = https.request(option, res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', d => {
      process.stdout.write(d)
    })
  })
  
  req.on('error', error => {
    console.error(error)
  })
  
  req.end()
}

node()

// getTested()

// var p = getCountryName("AF")

// console.log(p)