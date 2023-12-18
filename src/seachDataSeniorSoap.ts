import * as soap from 'soap'

export const seachDataSeniorSoap = () => {
  const url = process.env.URL as string

  soap.createClient(url, (err, client) => {
    if (err) {
      //precisa tratar o erro
      console.log(err)
    } else {
      client.WS034FUN(
        {
          user: process.env.USER,
          password: process.env.PASSWORD,
          encryption: 0,
          parameters: {
            adatini: ''
          }
        },
        (err: any, result: any) => {
          if (err) {
            //precisa tratar o erro
            return console.log(err)
          } else {
            return console.log(result.result)
          }
        }
      )
    }
  })
}
