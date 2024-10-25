
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 😒</h1>
      <p className="text-xl">Page not found</p>
      <a href="/" className="text-blue-500 hover:underline">Go back home</a>
    </div>
  )
}
