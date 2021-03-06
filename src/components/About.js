import React, { useEffect, useState } from "react";
import sanityClient from "../client";
// import city from "../city.gif";
import image from "../laptopbackground.jpg";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
const builder = ImageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}
export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading....</div>;
  return (
    <main className="relative">
      <img
        src={image}
        alt="laptop"
        className="absolute object-cover h-full lg:w-full lg:h-screen"
      />

      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hello I'm <span className="text-green-100">{author.name}</span>
            </h1>

            <div className="prose lg:prose-xl text-white">
              {" "}
              <BlockContent
                blocks={author.bio}
                projectId="za0dxaas"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
