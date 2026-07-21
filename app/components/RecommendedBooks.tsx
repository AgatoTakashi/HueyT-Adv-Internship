import BookCard from "./BookCard";

async function RecommendedBooks() {
  const data = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
  );
  const books = await data.json();

  if (!Array.isArray(books)) return null;

  return (
    <div className="flex mb-[32px] gap-[4px] hover-green">
      {books.slice(0,5).map((book: any) => (
        <BookCard key={book.id} bookData={book} />
      ))}
    </div>
  );
}

export default RecommendedBooks;
