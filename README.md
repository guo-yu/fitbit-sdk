## ![logo](http://ww1.sinaimg.cn/large/61ff0de3gw1e8e02zagsnj201901n742.jpg) fitbit-sdk ![npm](https://badge.fury.io/js/fitbit-sdk.png)

a developer friendly node.js sdk of fitbit by [turing](https://npmjs.org/~turing) 

### Installation
````
$ npm install fitbit-sdk
````

### Example
````javascript
var Fitbit = require('fitbit-sdk');

var fitbit = new Fitbit({
    key: '12345678',
    redirect: 'http://mysite/callbackPage'
});
````
use as Express Middleware for OAuth1.0
````javascript
// fetch request token and redirect user to auth page
app.get('/auth', fitbit.auth);

// parse access token (check res.locals.fitbit)
app.get('/callbackPage', fitbit.access, myRouter)
````
use as api-collection
````javascript
fitbit.user.read(function(err, result){
    console.log(result.body);
});

fitbit.user.update({
    name: '123'
},function(err, result){
    console.log(result.body);
});

fitbit.device.list(function(err, result){
    console.log(result.body);
});
````

### API
check this file: `index.js`

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2013 turing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
generated using [docor](https://github.com/turingou/docor.git) @ 0.1.0. brought to you by [turingou](https://github.com/turingou)