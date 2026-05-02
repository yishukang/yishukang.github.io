import { defaultLang, ui, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}

export function localizePath(pathname: string, targetLang: Lang): string {
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  const withoutLang = cleanPath === "/zh" ? "/" : cleanPath.replace(/^\/zh(?=\/)/, "");

  if (targetLang === defaultLang) return withoutLang || "/";
  if (withoutLang === "/") return "/zh/";
  return `/zh${withoutLang}`;
}

export function pathFor(lang: Lang, path = "/"): string {
  if (lang === defaultLang) return path;
  if (path === "/") return "/zh/";
  return `/zh${path}`;
}
