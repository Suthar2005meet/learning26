import { useParams } from 'react-router-dom'

export const TeamDetails = () => {
    const teamName = useParams().name
  return (
    <div style={{textAlign:'center'}}>
        <h1>Playing...{teamName}</h1>
    </div>
  )
}
