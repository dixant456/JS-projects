$.ajax({
    type : 'get',
    url: 'https://api.covid19api.com/summary',
    success : function(response){
        console.log(response)
    },
    error : function(error){
        console.log(error)
    }
})