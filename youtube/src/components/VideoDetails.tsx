import { ChevronRightIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import type { videoInterface } from "../interfaces/videoInterface"

export function VideoDetails({data}: {data: videoInterface}) {
  const featureName = data.title;

  return (
    <Card size="sm" className="w-full max-w-6xl ml-0.5">
      <CardHeader>
        <CardTitle>{featureName}</CardTitle>
        <CardDescription>
          {data.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-row justify-around gap-2 py-2 text-sm">
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span><i className="fa-solid fa-eye"></i> {data.viewCount}</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span><i className="fa-solid fa-thumbs-up"></i> {data.likeCount}</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span><i className="fa-solid fa-thumbs-down"></i> {data.dislikeCount}</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
