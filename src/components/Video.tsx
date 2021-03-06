import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  PictureInPicture,
  Spinner,
} from "phosphor-react";
import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 flex justify-center items-center text-sm gap-2">
        <Spinner size={24} />
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-lg font-bold">{data.lesson.title}</h1>
            <p className="mt-4 leading-relaxed text-sm">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                  className="h-16 w-16 rounded-full border-2 border-white"
                />
                <div className="leading-relaxed">
                  <strong className="font-bold text-lg block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <a
              href=""
              className="p-4 text-sm bg-blue-500 hover:bg-blue-700 flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href=""
            className="col-span-1 bg-gray-700 rounded overflow-hidden flex items-stretch gap-6"
          >
            <div className="bg-gray-800 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-lg">Reposit??rio no GitHub</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesso o material complementar.
              </p>
            </div>
          </a>
          <a
            href=""
            className="col-span-1 bg-gray-700 rounded overflow-hidden flex items-center jutify-between gap-6"
          >
            <div className="bg-gray-800 h-full p-6 flex items-center">
              <PictureInPicture size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-lg">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesso os wallpapers exclusivos.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
