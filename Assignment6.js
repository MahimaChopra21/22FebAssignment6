var datatype = (checkData) => { 

    if(typeof(checkData)=="undefined")
       {
          console.log("undefined")
          
       }
    else if(checkData == null)
       {
           console.log("null");

       }
    else if(checkData.constructor==Array)
        {
           
         if(checkData[0].constructor==Object)
         {
            console.log("Array of Object");
            var data = checkData.map( (x) => {
                return(x)

            })
            console.log(data)
         }
         else 
         {
            console.log("array");
             var arr = checkData.map( (x) => {
                return(x)

            })
            console.log(arr);

             
         }
     }
     else if(checkData.constructor==Number)
    {
        console.log("Number :");
        console.log(checkData);
        
    }
    else if(checkData.constructor==String)
    {
        console.log("String :");
        console.log(checkData);
        
    }
    else if(checkData.constructor==Object)
    {
        console.log("object :" );
        
    }
    
    else if(isNaN(checkData)==true)
    {
        console.log("NaN")
    }
    else {
        console.log("no input");
    }
    
    }
    
    var typeOfData;

    var t = typeOfData.map( (x) => {
        datatype( x );
    })