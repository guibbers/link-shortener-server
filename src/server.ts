import express, { Request, Response } from 'express';
import axios from 'axios'
import cors from 'cors'

const app = express();
const port = 3333;

app.use(express.json())
app.use(cors())

app.post('/', async (req: Request, res: Response) => {
  try {
    if(!req.body.url) {
      return res.status(400).json({error: 'Please make sure to type a valid URL!'});
    }
    const response = await axios.post('https://cleanuri.com/api/v1/shorten', {
      url: req.body.url
    });
    
    const shortenedURL = response.data.result_url
    res.json({shortenedURL})
  } catch(e){
    console.error('Something went wrong: ', e)
    res.status(500).json({error: 'Something went wrong, please try again.'})
  }
});

app.listen(port, ()=>{
  console.log(`app running on port: ${port}`);  
})