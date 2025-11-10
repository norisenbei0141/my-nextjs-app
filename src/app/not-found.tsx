import Link from "next/link";
export default function NotFound() {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-6 text-gray-600">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          ホームに戻る
        </Link>
      </div>
    );
  }
  