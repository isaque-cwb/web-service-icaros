import * as soap from 'soap'
import { ApiError } from './helpers/api-erros'

export const seachPhotoSeniorSoap = () => {
  const url = process.env.URL as string
  const body = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    encryption: 0,
    parameters: {
      nnumcad: 18,
      nnumemp: 1,
      ntipcol: 1
    }
  }

  soap
    .createClientAsync(url)
    .then(async client => {
      await new Promise((resolve, reject) => {
        return client.WS034FOT(body, (err: any, result: any) => {
          if (err) {
            reject(console.log(err))
          }
          resolve(console.log(result.result))
        })
      })
    })
    .catch(err => {
      throw new ApiError('Erro de conexão da URL', 404)
    })
}
