import { LinkToSpace } from "./not-found_components/linkToSpace";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center">
      <div>
        <h1 className="mb-4 select-none text-4xl">404</h1>
      </div>
      <div>
        <p>
          Esta página não foi encontrada, talvez queira entrar neste{" "}
          <LinkToSpace />
        </p>
      </div>
    </div>
  );
}
