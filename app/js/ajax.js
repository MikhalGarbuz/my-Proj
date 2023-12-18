let dataset=[];
$.ajax({
    type : 'GET',
    dataType : 'json',
    url: './ChartsData.json',
    success : function(response) {
        for (let i = 0; i < response.length; i++) {
            dataset[i] = response[i].point;

        }
    }
    });