export default function Download({ params }: { params: { spaceID: string } }) {
  return (
    <main className="h-screen">
      <textarea className="h-full w-full resize-none dark:bg-neutral-900"></textarea>
    </main>
  );
}
