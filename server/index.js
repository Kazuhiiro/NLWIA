import cors from 'cors'
import express from 'express'

import { download } from "./download.js"

const app = express()
app.use(cors)

/*
Receber as informações e entregar uma resposta
*/
app.get('/summary/:id', (request, response) => {
    download(request.params.id)

    response.json({ result: "Download do vídeo realizado com sucesso!" })
})

app.listen(3333, () => console.log("Server is running on port 3333"))
