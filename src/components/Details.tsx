import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Track } from '../types/Track'
import { Card, Button } from 'react-bootstrap'

const Details = () => {
  const [track, setTrack] = useState<Track>()
  const fetchTrack = async (id: string | undefined) => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/track/${id}`
    )
    if (response.ok) {
      const body = await response.json()
      setTrack(body)
    }
  }
  const params = useParams()
  console.log(params.id)

  useEffect(() => {
    fetchTrack(params.id)
  }, [params.id])
  return track ? (
    <Card className="details-card">
      <Card.Img variant="top" src={track?.album.cover} />
      <Card.Body>
        <Card.Title>{track.title}</Card.Title>
        <Card.Text>{track.artist.name}</Card.Text>
        <Card.Text>{track.album.title}</Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <div></div>
  )
}

export default Details
