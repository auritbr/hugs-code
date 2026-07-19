import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/quem-somos/nossa-historia")({
  beforeLoad: () => {
    throw redirect({ to: "/quem-somos", statusCode: 301 });
  },
  component: () => null,
});