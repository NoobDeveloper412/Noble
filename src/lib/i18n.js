import { init, register, locale as $locale } from "svelte-i18n";
import en from "./translations/en";
import jp from "./translations/jp";

register("en", () => Promise.resolve(en));
register("jp", () => Promise.resolve(jp));

init({
    fallbackLocale: "en",
    initialLocale: "en", // default
});

export const locale = $locale;
