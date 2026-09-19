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
    .then(() => {
        console.log("data1 save.");
        return savetoDb("helloworld");
        })
        .then (() => {
            console.log("data2 saved.");
            return savetoDb("mayur");
        })
        .then(() => {
            console.log("data3 saved.")
        })
        .catch(() => {
            console.log("promise was rejected");
        });