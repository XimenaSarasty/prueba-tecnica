import { Card } from '@mui/material';
import data from '../../data/sample.json'

export const Cards = () => {
    console.log({data});
  return (
    <>
        <div className='cards'>
            {
                data.map((program) => {
                    return <Card
                    title={program.title}
                    img={program.url}
                    />
                }              
                
                )}
      <h1>Popular titles</h1>
    </div>
    </>
  )
}

