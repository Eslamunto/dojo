var axios = require('axios');
var data = JSON.stringify({"name":"apprenticeTeam","token":"eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoib3V0bnVtYmVyZWQiLCJpYXQiOjE1OTMxNzcwNTB9.v4guMdvWi7UpTAR4fDkQ8_YEBai9DIg8QOcTw8NKLwo"});

var config = {
    method: 'post',
    url: 'http://simmarith.com:3000/codingdojo/outnumbered/',
    headers: {
        'Content-Type': 'application/json'
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log("##### TOKEN #######");
        console.log(JSON.stringify(response.data.token))
        var token = response.data.token;
        console.log("##### Numbers #######");
        console.log(typeof response.data.numbers)

        var numbers = response.data.numbers;
        var result = 0;
        var divisor  = numbers.pop();


        for (x of numbers) {
            console.log(x);
            if(!(x % divisor)) {
                result++;
            }
        }

        console.log("$$$$$$$ RESULT #######");
        console.log(result);


        var data = JSON.stringify({"name":"apprenticeTeam","token": token,"solution":result});

        var config = {
            method: 'post',
            url: 'http://simmarith.com:3000/codingdojo/outnumbered/solve',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });



        // 1- do the math operations

        // 2- send the post request
    })
    .catch(function (error) {
        console.log(error);
    });
