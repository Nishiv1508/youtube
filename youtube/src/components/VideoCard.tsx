import type { videoInterface } from "../interfaces/videoInterface"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

export default function VideoCard({data, handleClick}: {data: videoInterface, handleClick: (id: string) => void}) {
    const imageURL = import.meta.env.VITE_ASSET_BASEURL + data.thumbnailKey
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={imageURL}
        alt="Thumbnail Unavailable"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{data.category}</Badge>
        </CardAction>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>
          {!data.description? "No Description" : data.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" onClick={()=>handleClick(data.id)} >Watch</Button>
      </CardFooter>
    </Card>
  )
}
