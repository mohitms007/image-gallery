import Link from "next/link";

const mockPost = [
  "https://utfs.io/f/00e9924d-3559-4581-aa13-14b18631e17c-612j3v.jpg",
  "https://utfs.io/f/b03a6f06-1cbb-4e07-8e6b-e45b6710f8fd-629co3.jpg",
  "https://utfs.io/f/8913cf2e-8dd0-48f3-8e57-14f834dc458f-i2ep1x.png"
]

const mockUrls = mockPost.map((item, index) => ({
  id: index + 1,
  url: item
}))


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 align-center">
        {[...mockUrls, ...mockUrls].map((item) => (
          <div className="w-1/4 p-4">
            <img key={item.id} src={item.url} />
          </div>
        ))}
      </div>
      Integrate Posts in the app
    </main>
  );
}
