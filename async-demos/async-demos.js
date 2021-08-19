(function(){
    /* Sync */
    function addSync(x,y) {
        console.log(`   [@service] processing ${x} and ${y}`);
        var result = x+y;
        console.log(`   [@service] returning the result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] triggering the service`);
        var result = addSync(x,y);
        console.log(`[@client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    /* Async */
    function addAsync(x,y, callback) {
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(function(){
            var result = x+y;
            console.log(`   [@service] returning the result`);
            callback(result)
        }, 5000)
    }

    function addAsyncClient(x,y){
        console.log(`[@client] triggering the service`);
        addAsync(x,y, (result) => {
            console.log(`[@client] result = ${result}`);
        });
    }

    window['addAsyncClient'] = addAsyncClient;
})();