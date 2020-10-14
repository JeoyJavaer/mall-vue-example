import axios from 'axios'

export  function request(config){
  const  instance =axios.create({

  })

  instance.interceptors.request.use(config=>{
    return config
  },error => {
    console.log('request error:'+error);
  })

  instance.interceptors.response.use(result=>{

  },error => {
    console.log('response error:'+error)
  })


  return instance(config)
}