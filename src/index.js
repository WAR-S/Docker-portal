let cleanup = () =>{
    document.getElementById('name').value = null; 
    document.getElementById('tag').value = null;
    document.getElementById('dockerManifest').value = null;
}

cleanup();
let push = document.getElementById('push');
push.addEventListener("click",()=>{
                    doValid();
                    document.getElementById('name').value = null; 
                    document.getElementById('tag').value = null;
                    document.getElementById('dockerManifest').value = null;
                })


            
function doValid() {
    var obj = new Object();
    if (document.getElementById('name').value!=null)
    {
        obj.name = document.getElementById('name').value;
        if (document.getElementById('tag').value!=null)
        {
            obj.tag = document.getElementById('tag').value;
            if (document.getElementById('dockerManifest').value!=null)
            {
                obj.dockerManifest = document.getElementById('dockerManifest').value;
                let jsonString= JSON.stringify(obj);
                console.log(jsonString);
                doSend(jsonString);
            }
            else
            {
                console.log("Emtry manifest");
            }
        }
        else 
        {
            console.log("Something went wrong")
        }        
    }
    else
    {
        console.log("Emtry filename");
    }
}

function doSend(jsonString)
{
    (async () => {
        const rawResponse = await fetch('http://worker1.wars/build', {
          method: 'POST',
          headers: {
            'Accept': 'application/octet-stream',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: jsonString
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();
}
