export default function FormFind() {
  return (
    <form action="/" method="get" className="flex-1 flex w-full">
      <div className="w-full flex">
        <input type="text" name="searchTerm" placeholder="Search" className="flex-1" />
        <button>Find</button>
      </div>
    </form>
  )
}