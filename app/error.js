import ErrorBoundary from "@/components/error-boundary";

export default function Error({ error, reset }) {
  return <ErrorBoundary error={error} reset={reset} />;
}