import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

export default function HomePage() {
  return (
    <Card className="m-auto w-96 scale-110 shadow-md">
      <CardHeader>
        <Label className="place-self-center text-lg font-semibold tracking-wide" htmlFor="password">
          Qv#:4dD2E&.sgCHW
        </Label>
      </CardHeader>
      <CardContent className="flex justify-center gap-4">
        <Button className="rounded-full bg-indigo-600 text-white" id="copy">
          ◲ Copy
        </Button>
        <Button className="rounded-full bg-sky-500 text-white" id="regenerate">
          ↻ Regenerate
        </Button>
      </CardContent>
    </Card>
  );
}
