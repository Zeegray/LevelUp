var ar = [1,,3,4,5,6];
function getElement( arr, callback){
    var resault;
    var e;
    for(var i = 0; i <= arr.length; i++)
//       e = arr[i];
        resault += callback(i);
       return resault; 
};

getElement(ar, function(i){
    console.log(i);
});