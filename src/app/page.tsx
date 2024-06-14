import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <Label className="place-self-center font-semibold" htmlFor="password">
            Qv#:4dD2E&.sgCHW
          </Label>
        </CardHeader>
        <CardContent className="flex justify-center gap-4">
          <Button className=" bg-indigo-600 text-white" id="copy">
            ◲ Copy
          </Button>
          <Button className="bg-sky-500 text-white" id="regenerate">
            ↻ Regenerate
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
