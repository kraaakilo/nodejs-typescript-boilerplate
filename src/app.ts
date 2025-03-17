import "@/load-env"
import { defaultServer } from "@/server";


defaultServer.listen(8000, () => {
  console.log(`default server started at ${new Date(Date.now()).toUTCString()}`)
})
