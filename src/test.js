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


function getPromise(index) {
	return new Promise((resolve, reject) => {
		https.get(`https://jsonmock.hackerrank.com/api/countries?page=${index}`, (response) => {
			let chunks_of_data = [];

			response.on('data', (fragments) => {
				chunks_of_data.push(fragments);
			});

			response.on('end', () => {
				let response_body = Buffer.concat(chunks_of_data);
				resolve(response_body.toString());
			});

			response.on('error', (error) => {
				reject(error);
			});
		});
	});
}

async function makeSynchronousRequest(index) {
	try {
		let http_promise = getPromise(index);
		let response_body = await http_promise;

		// holds response from server that is passed when Promise is resolved
    return JSON.parse(response_body)
	}
	catch(error) {
		// Promise rejected
		console.log(error);
	}
}


// async function getName(code){
//   var i = 1
//   isCompleted = false
//   result = null
//   while (!isCompleted){
//     var result = await makeSynchronousRequest(i)
//     if (i <= result.total_pages){
//       i++
//       result.data.map(country => {
//         if (country.alpha2Code === code){
//           iscompleted =true
//           result =  country.name
//         }
//       })
    
//     if (result){
//       break
//     }
//     }else{
//       iscompleted =true
//       console.log("no matched results")
//       return false
//     }
//   }

//   return result
// }

// var res = getName("AF")

// console.log(res)



(async (code) => {
  var i = 1
  isCompleted = false
  var resultTwo = null
  while (!isCompleted){
    var result = await makeSynchronousRequest(i)
    
    if (i <= result.total_pages){
      i++
      result.data.map(country => {
        if (country.alpha2Code === code){
          iscompleted =true
          resultTwo = country.name
        }
      })

      if (resultTwo){
        break
      }

    }else{
      iscompleted =true
      console.log("no matched results")
      return false
    }
  }
console.log(resultTwo)
})("GP")




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

// node()

// getTested()

// var p = getCountryName("AF")

// console.log(p)