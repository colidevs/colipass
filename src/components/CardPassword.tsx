import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

export default function CardPassword() {
  return (
    <Card className="m-auto size-36 w-96 shadow-md">
      <CardHeader>
        <Label className="text-center text-lg font-semibold tracking-wide" htmlFor="password">
          Qv#:4dD2E&.sgCHW
        </Label>
      </CardHeader>
      <CardContent className="flex justify-center gap-4">
        <Button
          className="rounded-full border-indigo-700 bg-indigo-600 text-white shadow-md transition-transform ease-in-out hover:scale-110"
          id="copy"
        >
          ◲ Copy
        </Button>
        <Button
          className="rounded-full bg-sky-500 text-white shadow-md transition-transform ease-in-out hover:scale-110"
          id="regenerate"
        >
          ↻ Regenerate
        </Button>
      </CardContent>
    </Card>
  );
}
