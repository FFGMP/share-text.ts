import { Metadata } from "next";
import { TextArea } from "./components/textArea";
export default function Download({ params }: { params: { spaceID: string } }) {
  return (
    <main className="h-screen">
      <TextArea path={params.spaceID} />
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { spaceID: string };
}): Promise<Metadata> {
  return {
    title: decodeURIComponent(params.spaceID) + " | texto.space ",
  };
}
