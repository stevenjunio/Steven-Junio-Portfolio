export async function onRequest(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;
    let theDay = 45
  
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer H2qKBBBrZsaKWfZmuaJlPBngaqj1hs285bThRK32");
    myHeaders.append("Cookie", "__cflb=0H28vgHxwvgAQtjUGU4vq74ZFe3sNVUZdBBHjqvtpq3; __cfruid=8dda362d2cb9c479fc381f3bebe375f263a60040-1649190981");
    
    var formdata = new FormData();
    formdata.append("file", fileInput.files[0], "[PROXY]");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    let theResult
    fetch("https://api.cloudflare.com/client/v4/accounts/19eab9e3016e1c72ff6165fd881e5932/images/v1", requestOptions)
      .then(response => response.text())
      .then(result => {
        theResult = result
      })
      .catch(error => console.log('error', error));
    
    return new Response(theResult);
  }