import {currentUser, auth} from "@clerk/nextjs";

export default async function Home() {
    const { userId } = auth();
    const user = await currentUser();
  return (
    <div className={"container max-w-7xl"}>
        Hello world
        <pre>{JSON.stringify({userId, user}, null, 2)}</pre>
    </div>
  )
}
