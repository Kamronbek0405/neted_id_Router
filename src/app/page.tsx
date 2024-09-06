import Image from "next/image";
import { booksData } from "@/data/data-server";
import { BooksCard } from "@/components/books-card";
import Books from "./books/page";

export default function Home() {
  return (
    <div>
      <div className=" flex items-center justify-center gap-10 mt-5">
        <Books/>
      </div>
    </div>
  );
}
