// function savetoDb(data, success, faliure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         success();
//     } else {
//         faliure();
//     }
// }

// savetoDb(
//     "apna colllege",
//     () => {
//         console.log("SUCCESS: your data was saved");
//         savetoDb(
//             "hello world", 
//             () => {
//                 console.log("success2: data2 saved");
//                 savetoDb(
//                     "mayur", 
//                     () => {
//                         console.log("success3: data3 saved")
//                     }, 
//                     () => {
//                         console.log("faliure3: weak connection");
//                     }
//                 )
//             }, 
//             () => {
//                 console.log("faliure2: weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("FALIURE: weak connection, data not saved");
//     }
// );

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("Success: data was saved");
        } else {
            reject("faliure: weak connection");
        }
    });
}

savetoDb("apna college") 
    .then((result) => {
        console.log("data1 save.");
        console.log("result of promise: ", result);
        return savetoDb("helloworld");
        })
        .then ((result) => {
            console.log("data2 saved.");
            console.log("result of promise: ", result);
            return savetoDb("mayur");
        })
        .then((result) => {
            console.log("data3 saved");
            console.log("result of promise: ", result);
        })
        .catch((error) => {
            console.log("promise was rejected");
            console.log("error of promise: ", error);
        });