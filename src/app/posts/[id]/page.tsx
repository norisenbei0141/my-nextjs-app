type Props = {
    params:{
        id : string;
    };
};

export default function PostPage({ params }: Props) {
    const id = params.id;

    return (
        <main className="flez min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold">記事ページ</h1>
            <p className="mt-4 text-lg">
                この記事のIDは「<span className="font-bold text-orange-400">{id}</span>」です。
            </p>
        </main>
    );
}
