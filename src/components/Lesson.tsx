import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' - 'd' de 'MMMM' - 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300 text-sm">{availableDateFormatted}</span>

      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-blue-500",
          {
            "bg-blue-500": isActiveLesson,
            "border-blue-500": isActiveLesson,
            "border-gray-500": !isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex gap-1 items-center text-sm font-medium">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span
              className={classNames(
                "flex gap-1 items-center text-sm font-medium",
                {
                  "text-orange-500": !isActiveLesson,
                  "text-white": isActiveLesson,
                }
              )}
            >
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              "text-xs rounded px-2 py-[0.125rem] border font-bold",
              {
                "border-white": props.type != "live" && isActiveLesson,
                "border-pink-500": props.type == "live" && !isActiveLesson,
                "text-white": props.type != "live" && isActiveLesson,
                "text-pink-500": props.type == "live" && !isActiveLesson,
              }
            )}
          >
            {props.type == "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={classNames("mt-5 block text-white", {
            "opacity-100": isActiveLesson,
            "opacity-50": !isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
