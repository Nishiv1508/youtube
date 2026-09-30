
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import type { Profile } from "../interfaces/Profile"

export function ProfileCard({data}: {data: Profile}) {
  const featureName = data.name

  return (
    <Card size="sm" className="mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle>{featureName}</CardTitle>
        <CardDescription>
          Email: {data.email}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* <ul className="grid gap-2 py-2 text-sm">
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>Role: {data.role}</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>ChannelName: {data.channelName}</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>Created Date: {data.createdAt.slice(0,10)}</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>Your Id: {data.id}</span>
          </li>
        </ul> */}

        <Accordion className="max-w-lg">
      <AccordionItem value="role">
        <AccordionTrigger>Role</AccordionTrigger>
        <AccordionContent>
          {data.role}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="channelName">
        <AccordionTrigger>Channel Name</AccordionTrigger>
        <AccordionContent>
          {data.channelName}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="date">
        <AccordionTrigger>Created Date</AccordionTrigger>
        <AccordionContent>
          {data.createdAt.slice(0, 10)}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="id">
        <AccordionTrigger>ID</AccordionTrigger>
        <AccordionContent>
          {data.id}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </CardContent>
    </Card>
  )
}
