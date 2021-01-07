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


async function getName(code){
  var i = 1
  isCompleted = false
  var finalResult = null
  while (!isCompleted){
    var result = await makeSynchronousRequest(i)
    if (i <= result.total_pages){
      i++
      result.data.map(country => {
        if (country.alpha2Code === code){
          iscompleted =true
          finalResult =  country.name
        }
      })
    
    if (finalResult){
      break
    }
    }else{
      iscompleted =true
      console.log("no matched results")
      return false
    }
  }
  return finalResult
}

// getName("AF")
//   .then((value) => {
//     console.log(value)
//     return value
//   }).then((value) => {
//     console.log(value+"ewwe")
//   })


// (async (code) => {
//   var i = 1
//   isCompleted = false
//   var resultTwo = null
//   while (!isCompleted){
//     var result = await makeSynchronousRequest(i)
    
//     if (i <= result.total_pages){
//       i++
//       result.data.map(country => {
//         if (country.alpha2Code === code){
//           iscompleted =true
//           resultTwo = country.name
//         }
//       })

//       if (resultTwo){
//         break
//       }

//     }else{
//       iscompleted =true
//       console.log("no matched results")
//       return false
//     }
//   }
// console.log(resultTwo)
// })("GP")




function getCountryName(code) {
    var i = 1
    var flag = true
    var final = null

    return new Promise((resolve, reject) => {
      https.get(`https://jsonmock.hackerrank.com/api/countries?page=1`, (response) => {
        let chunks_of_data = [];
  
        response.on('data', (fragments) => {
          chunks_of_data.push(fragments);
        });
  
        response.on('end', () => {
          var newData = JSON.parse(chunks_of_data)
              if (i <= newData.total_pages){
                i++
                newData.data.map((state) => {
                    if (state.alpha2Code === code){
                        flag = false
                        final = state.name               
                    }
                })
              }else{
                  flag = false              
              }
              
          resolve(final)
        });

        response.on('error', (error) => {
          reject(error);
        });
      });
    });
}

// (
//   async () => {
//     var p = await getCountryName("AF")
//     console.log(p)
//   }
// )()



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


// getTested()

// var p = getCountryName("AF")

// console.log(p)